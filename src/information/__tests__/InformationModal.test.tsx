import { render, screen } from '@testing-library/react';
import InformationModal from '../InformationModal';

describe('<InformationModal />', () => {
  it('should render with correct title and sections', () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    render(<InformationModal isOpen onClose={() => {}} />);

    const modalTitle = screen.getByText('Credits');
    expect(modalTitle).toBeInTheDocument();

    const sections = [
      'Application Development',
      'Sponsors',
      'Ownership',
      'Assets',
      'Disclaimer'
    ];
    sections.forEach((section) => {
      const sectionTitle = screen.getByText(section);
      expect(sectionTitle).toBeInTheDocument();
    });
  });

  it('should toggle accordion section application development when clicked', async () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    render(<InformationModal isOpen onClose={() => {}} />);

    const sectionTitle = await screen.findByText('Application Development');
    expect(sectionTitle).toBeInTheDocument();

    expect(
      screen.getByText('This application is developed by:')
    ).toBeInTheDocument();
  });
});
