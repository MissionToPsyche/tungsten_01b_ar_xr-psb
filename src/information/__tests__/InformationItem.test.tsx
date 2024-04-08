import InformationItem from '../InformationItem';
import { render, screen } from '@testing-library/react';
import { Accordion } from '@chakra-ui/react';

const setup = () =>
  render(
    <Accordion>
      <InformationItem title="Test Title" index={0}>
        <p>Test Content</p>
      </InformationItem>
    </Accordion>
  );

describe('<InformationItem />', () => {
  it('should render with correct title and content', () => {
    setup();

    const itemTitle = screen.getByText('Test Title');
    expect(itemTitle).toBeInTheDocument();

    const itemContent = screen.getByText('Test Content');
    expect(itemContent).toBeInTheDocument();
  });
});
