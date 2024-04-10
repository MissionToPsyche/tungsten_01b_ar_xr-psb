import getInformationConfig from '../get-information-config.tsx';
import { fireEvent, render, screen } from '@testing-library/react';
import InformationModal from '../InformationModal.tsx';

vi.mock('../get-information-config.tsx');

const onClose = vi.fn();

const setup = (isOpen = true) =>
  render(<InformationModal isOpen={isOpen} onClose={onClose} />);

describe('<InformationModal/>', () => {
  it.each(
    getInformationConfig().authors.map((author) => [author.name, author.link])
  )('should render the author %s with link %s', (name, link) => {
    setup();

    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText(name).closest('a')).toHaveAttribute('href', link);
  });

  it('should render the sponsors section', () => {
    setup();

    expect(screen.getByText('Sponsor')).toBeInTheDocument();
    expect(screen.getAllByText('Arizona State University')).toHaveLength(2);
  });

  it('should render the ownership section', () => {
    setup();

    expect(screen.getByText('Ownership')).toBeInTheDocument();
    expect(screen.getAllByText('Arizona State University')).toHaveLength(2);
  });

  it.each(
    getInformationConfig().disclaimers.map((disclaimer) => [disclaimer.title])
  )('should render the disclaimer %s', (title) => {
    setup();

    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it.each(
    getInformationConfig().attributions.map((attribution) => [
      attribution.name,
      attribution.link
    ])
  )('should render the attribution %s with link %s', (name, link) => {
    setup();

    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText(name).closest('a')).toHaveAttribute('href', link);
  });

  it('should call onClose when the close button is clicked', () => {
    setup();

    fireEvent.click(screen.getByLabelText('Close'));

    expect(onClose).toHaveBeenCalled();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
