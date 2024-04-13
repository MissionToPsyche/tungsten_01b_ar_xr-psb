import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import TutorialModal from '../TutorialModal.tsx';

vi.mock('../get-tutorial-config.ts');

const onClose = vi.fn();

const setup = (isOpen = true) =>
  render(<TutorialModal isOpen={isOpen} onClose={onClose} />);

describe('<TutorialModal/>', () => {
  it('should render the tutorial modal', () => {
    setup();
    expect(screen.getByText('Tutorial')).toBeInTheDocument();
  });

  it('should render the first tutorial step', () => {
    setup();

    expect(screen.getByText('Tutorial 1')).toBeInTheDocument();
    expect(screen.getByText('Description 1')).toBeInTheDocument();
    expect(screen.getByText('Tutorial Component 1')).toBeInTheDocument();
  });

  it('should render the second tutorial step', async () => {
    setup();

    expect(screen.getByText('Tutorial 2')).toBeInTheDocument();

    fireEvent.click(screen.getByText('2'));

    await waitFor(() => {
      expect(screen.getByText('Description 2')).toBeInTheDocument();
      expect(screen.getByText('Tutorial Component 2')).toBeInTheDocument();
    });
  });

  it('should render the third tutorial step', async () => {
    setup();

    expect(screen.getByText('Tutorial 3')).toBeInTheDocument();

    fireEvent.click(screen.getByText('3'));

    await waitFor(() => {
      expect(screen.getByText('Description 3')).toBeInTheDocument();
      expect(screen.getByText('Tutorial Component 3')).toBeInTheDocument();
    });
  });

  it('should render the fourth tutorial step', async () => {
    setup();

    expect(screen.getByText('Tutorial 4')).toBeInTheDocument();

    fireEvent.click(screen.getByText('4'));

    await waitFor(() => {
      expect(screen.getByText('Description 4')).toBeInTheDocument();
      expect(screen.getByText('Tutorial Component 4')).toBeInTheDocument();
    });
  });

  it('should close the modal when the close button is clicked', () => {
    setup();

    fireEvent.click(screen.getByLabelText('Close'));

    expect(onClose).toHaveBeenCalled();
  });

  it('should not render the modal if isOpen is false', () => {
    setup(false);

    expect(screen.queryByText('Tutorial')).not.toBeInTheDocument();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
