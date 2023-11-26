import { render, screen } from '@testing-library/react';
import RenderIf from '../RenderIf.tsx';
import { expect } from 'vitest';

const childText = 'I am the child';

const setup = (shouldRender = false) =>
  render(
    <RenderIf shouldRender={shouldRender}>
      <p>{childText}</p>
    </RenderIf>
  );

describe('<RenderIf/>', () => {
  it('should not render the children if shouldRender=false', () => {
    setup();

    expect(screen.queryByText(childText)).not.toBeInTheDocument();
  });

  it('should should render the children if shouldRender=true', () => {
    setup(true);

    expect(screen.queryByText(childText)).toBeInTheDocument();
  });
});
