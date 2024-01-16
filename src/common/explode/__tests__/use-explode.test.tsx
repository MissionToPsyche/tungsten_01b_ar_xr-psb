/* eslint-disable @typescript-eslint/no-empty-function */
import useExplode from '../use-explode.ts';
import { renderHook } from '@testing-library/react';
import React from 'react';
import { ExplodeContext } from '../Explode.tsx';

const value = {
  isExploded: false,
  removeExploding: () => {},
  toggleExploded: () => {},
  addExploding: () => {},
  isAtRest: true
};

const Wrapper = ({ children }: React.PropsWithChildren) => (
  <ExplodeContext.Provider value={value}>{children}</ExplodeContext.Provider>
);

const setup = () => renderHook(() => useExplode(), { wrapper: Wrapper });

describe('useExplode', () => {
  it('should expose the explode context', () => {
    const {
      result: {
        current: {
          isExploded,
          removeExploding,
          toggleExploded,
          addExploding,
          isAtRest
        }
      }
    } = setup();

    expect(isExploded).toEqual(value.isExploded);
    expect(removeExploding).toEqual(value.removeExploding);
    expect(toggleExploded).toEqual(value.toggleExploded);
    expect(addExploding).toEqual(value.addExploding);
    expect(isAtRest).toEqual(value.isAtRest);
  });

  it('should throw if used outside of the provider', () => {
    expect(() => renderHook(() => useExplode())).toThrowError();
  });
});
