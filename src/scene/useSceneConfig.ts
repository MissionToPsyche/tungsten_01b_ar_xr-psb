import { useEffect, useMemo, useState } from 'react';
import { SceneConfig } from './types/scene-config.ts';
import getSceneConfig from './get-scene-config.ts';
import useSettings from '../settings/use-settings.ts';
import isArSupported from './utils/is-ar-supported.ts';

const useSceneConfig = (): SceneConfig => {
  const [arSupported, setArSupported] = useState(true);
  const { arEnabled } = useSettings();

  useEffect(() => {
    const isSupported = isArSupported();
    setArSupported(isSupported);
  }, []);

  return useMemo(() => {
    const originalConfig = getSceneConfig();
    const disableAr = !arSupported || originalConfig.disableAr || !arEnabled;

    return {
      ...originalConfig,
      disableAr
    };
  }, [arEnabled, arSupported]);
};

export default useSceneConfig;
