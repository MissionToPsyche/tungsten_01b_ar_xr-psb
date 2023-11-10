import { render } from '@testing-library/react';
import LoaderTracker from '../LoaderTracker.tsx';
import { expect, vi } from 'vitest';
import useLoader from '../use-loader.ts';
import { useProgress } from '@react-three/drei';

vi.mock('../use-loader.ts');
vi.mock('@react-three/drei', () => ({ useProgress: () => ({ progress: 50 }) }));

const setup = () => render(<LoaderTracker />);

describe('<LoaderTracker/>', () => {
  it('should set the loader progress to the current three.js loading progress', () => {
    setup();

    expect(useLoader().setProgress).toHaveBeenCalledWith(
      useProgress().progress
    );
  });
});
