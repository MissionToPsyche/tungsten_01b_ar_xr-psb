import { atom } from 'recoil';
import { Compatibility } from './use-compatibility.ts';
import isWebXrArSupported from './is-web-xr-supported.ts';
import isArJsSupported from './is-ar-js-supported.ts';

const compatibilityState = atom<Compatibility>({
  key: 'compatibilityState',
  default: new Promise((resolve) => {
    void isWebXrArSupported().then((webXrSupported) => {
      resolve({
        isWebXrArSupported: webXrSupported,
        isArJsSupported: isArJsSupported()
      });
    });
  })
});

export default compatibilityState;
