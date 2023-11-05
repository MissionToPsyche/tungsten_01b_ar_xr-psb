import { render } from '@testing-library/react';
import { expect } from 'vitest';
import { mockResizeObserver } from 'jsdom-testing-mocks';
import { FalconHeavy } from '../artifacts/FalconHeavy';

mockResizeObserver();

describe('<FalconHeavy/>', () => {
  it('should render', () => {
    render(<FalconHeavy />);
    expect(true).toBeTruthy();
  });
});
