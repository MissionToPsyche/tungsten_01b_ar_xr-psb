import '@testing-library/jest-dom';
import 'vitest-canvas-mock';
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

vi.stubGlobal('jest', vi);

afterEach(() => {
  cleanup();
});
