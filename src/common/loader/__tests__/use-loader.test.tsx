import { renderHook } from '@testing-library/react';
import useLoader from '../use-loader.ts';
import LoaderContext from '../loader-context.ts';
import React from 'react';
import { expect } from 'vitest';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const value = { progress: 75, setProgress: () => {} };

const Wrapper = ({ children }: React.PropsWithChildren) => (
  <LoaderContext.Provider value={value}>{children}</LoaderContext.Provider>
);

const setup = () => renderHook(() => useLoader(), { wrapper: Wrapper });

describe('useLoader', () => {
  it('should expose the loader context', () => {
    const {
      result: {
        current: { progress }
      }
    } = setup();

    expect(progress).toEqual(75);
  });

  it('should throw if used outside of the provider', () => {
    expect(() => renderHook(() => useLoader())).toThrowError();
  });
});
