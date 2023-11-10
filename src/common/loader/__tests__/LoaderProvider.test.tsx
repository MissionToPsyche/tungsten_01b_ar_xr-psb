import { render, screen } from '@testing-library/react';
import LoaderProvider from '../LoaderProvider.tsx';
import { expect } from 'vitest';

const setup = () => render(<LoaderProvider>I AM YOUR CHILD</LoaderProvider>);

describe('<LoaderProvider/>', () => {
  it('should render its children', () => {
    setup();

    expect(screen.getByText('I AM YOUR CHILD')).toBeInTheDocument();
  });
});
