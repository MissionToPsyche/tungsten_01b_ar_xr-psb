import { render } from '@testing-library/react';
import App from '../App.tsx';
import { expect } from 'vitest';
import { mockResizeObserver } from 'jsdom-testing-mocks';

mockResizeObserver();

describe('<App/>', () => {
  it('should render', () => {
    render(<App />);

    expect(true).toBeTruthy();
  });
});
