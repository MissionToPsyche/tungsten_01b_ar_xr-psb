import { useContext } from 'react';
import ModalContext from '../modal-context';
import ModalProvider from '../ModalProvider';
import {
  act,
  fireEvent,
  render,
  screen,
  cleanup
} from '@testing-library/react';
import { expect } from 'vitest';
import axe from 'axe-core';

const modalTitle = 'title';
const modalBody = 'body';

let openModal: (title: string, body: string) => void;

const ModalChild = () => {
  const context = useContext(ModalContext);
  if (!context) {
    return null;
  }
  const { open } = context;

  openModal = open;
};

const setup = () =>
  render(
    <ModalProvider>
      <ModalChild />
    </ModalProvider>
  );

describe('<ModalProvider/>', () => {
  it('should not render the modal until a consumer calls open', () => {
    setup();

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('should render the modal title and body that a consumer has set', () => {
    setup();

    act(() => {
      openModal(modalTitle, modalBody);
    });

    expect(screen.getByText(modalTitle)).toBeInTheDocument();
    expect(screen.getByText(modalBody)).toBeInTheDocument();
  });

  it('should close the modal when the close indicator is clicked', () => {
    setup();

    act(() => {
      openModal(modalTitle, modalBody);
    });

    expect(screen.getByText(modalTitle)).toBeInTheDocument();

    fireEvent.click(screen.getByLabelText('Close'));

    expect(screen.queryByText(modalTitle)).not.toBeVisible();
  });

  it('should have no accessibility violations', async () => {
    const { container } = setup();

    act(() => {
      openModal(modalTitle, modalBody);
    });

    const results = await axe.run(container);

    expect(results.violations.length).toEqual(0);
  });

  afterEach(() => {
    cleanup();
  });
});
