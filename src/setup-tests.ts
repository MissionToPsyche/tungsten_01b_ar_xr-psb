import '@testing-library/jest-dom';
import 'vitest-canvas-mock';
import { configMocks } from 'jsdom-testing-mocks';
import { act } from '@testing-library/react';
import { vi } from 'vitest';
import * as fs from 'fs';

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

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
class MockURL {
  // Noop mock URL class to avoid relative URL issues
  static createObjectURL() {
    return '';
  }
}

vi.stubGlobal('URL', MockURL);

// public/assets/models/falcon-heavy.gltf
const loadGltf = (path: string) => fs.readFileSync(path, 'utf-8');

vi.stubGlobal(
  'fetch',
  () =>
    new Promise((resolveRequest) => {
      resolveRequest({
        status: 200,
        arrayBuffer: () =>
          new Promise((resolveData) => {
            resolveData(loadGltf('public/assets/models/falcon-heavy.gltf'));
          })
      });
    })
);

// eslint-disable-next-line @typescript-eslint/no-misused-promises
configMocks({ act });
