import { render, screen } from '@testing-library/react';
import InformationItem from '../InformationItem.tsx';
import React from 'react';
import { Accordion } from '@chakra-ui/react';

const setup = (title: string, children: React.ReactNode) =>
  render(
    <Accordion>
      <InformationItem title={title} index={0}>
        {children}
      </InformationItem>
    </Accordion>
  );

describe('<InformationItem/>', () => {
  it('should render the title', () => {
    const title = 'Information Item Title';
    setup(title, <div>Information Item Child</div>);

    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it('should render the children', () => {
    const children = <div>Information Item Child</div>;
    setup('Information Item Title', children);

    expect(screen.getByText('Information Item Child')).toBeInTheDocument();
  });
});
