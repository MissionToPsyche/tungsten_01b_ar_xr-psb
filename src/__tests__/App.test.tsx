import { render, screen } from '@testing-library/react';
import App from '../App.tsx';
import { expect } from 'vitest';

describe('<App/>', () => {
  it('should render', () => {
    render(<App />);

    expect(screen.getByText('Vite + React')).toBeInTheDocument();
  });
});
