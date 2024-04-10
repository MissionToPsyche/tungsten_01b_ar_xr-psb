import getInformationConfig from '../get-information-config.tsx';
import { render, screen } from '@testing-library/react';

describe('getInformationConfig', () => {
  it.each([
    ['David Casey'],
    ['Ana Diru'],
    ['Anthony Zigerelli'],
    ['Avinaash Ghansam']
  ])('should contain an author entry for %s', (name) => {
    const { authors } = getInformationConfig();
    const names = authors.map(({ name }) => name);
    expect(names).toContain(name);
  });

  it('should contain attributions', () => {
    const { attributions } = getInformationConfig();
    expect(attributions).not.toHaveLength(0);
  });

  it('should contain disclaimers', () => {
    const { disclaimers } = getInformationConfig();
    expect(disclaimers).not.toHaveLength(0);
  });

  it('should contain the main project disclaimer', () => {
    const { disclaimers } = getInformationConfig();
    const projectDisclaimer = disclaimers.find(
      ({ title }) => title === 'Project'
    );

    expect(projectDisclaimer).toBeDefined();
    render(<>{projectDisclaimer?.disclaimer}</>);

    expect(
      screen.getByText(
        'This work was created in partial fulfillment of Pennsylvania State University Capstone Course',
        { exact: false }
      )
    ).toBeInTheDocument();
  });
});
