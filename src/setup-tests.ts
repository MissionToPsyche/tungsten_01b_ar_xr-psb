import '@testing-library/jest-dom';
import 'vitest-canvas-mock';
import { configMocks } from 'jsdom-testing-mocks';
import { act } from '@testing-library/react';

vi.useFakeTimers({
  toFake: [
    // vitests defaults
    'setTimeout',
    'clearTimeout',
    'setInterval',
    'clearInterval',
    'setImmediate',
    'clearImmediate',
    'Date',
    // required for mocks
    'performance',
    'requestAnimationFrame',
    'cancelAnimationFrame'
  ]
});

// eslint-disable-next-line @typescript-eslint/no-misused-promises
configMocks({ act });
