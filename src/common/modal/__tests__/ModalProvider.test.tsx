import { useContext } from 'react';
import ModalContext from '../modal-context';
import { ModalProvider } from '../ModalProvider';
import { act, render, screen } from '@testing-library/react';

const modalTitle = 'title';
const modalBody = 'body';

let openModal: () => void;

const ModalChild = () => {
  const context = useContext(ModalContext);
  if (!context) {
    return null;
  }
  const { setModalTitle, setModalBody, onOpen } = context;

  setModalTitle(modalTitle);
  setModalBody(modalBody);
  openModal = onOpen;
};

const setup = () => {
  render(
    <ModalProvider>
      <ModalChild />
    </ModalProvider>
  );
};

describe('<ModalProvider/>', () => {
  it('should not render the modal until a consumer calls open', () => {
    setup();

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('should render the modal title and body that a consumer has set', () => {
    setup();

    act(() => {
      openModal();
    });
    expect(screen.getByText(modalTitle)).toBeInTheDocument();
    expect(screen.getByText(modalBody)).toBeInTheDocument();
  });
});
