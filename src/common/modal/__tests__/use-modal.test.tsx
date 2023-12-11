import { renderHook } from '@testing-library/react';
import ModalContext from '../modal-context.ts';
import React from 'react';
import { expect } from 'vitest';
import useModal from '../use-modal.ts';

/* eslint-disable @typescript-eslint/no-empty-function */
const value = {
  open: () => {}
};

const Wrapper = ({ children }: React.PropsWithChildren) => (
  <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
);

const setup = () => renderHook(() => useModal(), { wrapper: Wrapper });

describe('useModal', () => {
  it('should expose the modal context', () => {
    const {
      result: {
        current: { open }
      }
    } = setup();

    expect(open).toEqual(value.open);
  });

  it('should throw if used outside of the provider', () => {
    expect(() => renderHook(() => useModal())).toThrowError();
  });
});
