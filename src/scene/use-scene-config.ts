import { useMemo } from 'react';
import { SceneConfig } from './types/scene-config.ts';
import getSceneConfig from './get-scene-config.ts';
import useSettings from '../settings/use-settings.ts';
import degreesToRadians from '../common/utils/degrees-to-radians.ts';
import useCompatibility from '../compatibility/use-compatibility.ts';

const useSceneConfig = (): SceneConfig => {
  const { arEnabled } = useSettings();
  const { isArSupported } = useCompatibility();

  return useMemo(() => {
    const originalConfig = getSceneConfig();
    const disableAr = !isArSupported || originalConfig.disableAr || !arEnabled;
    const markerXRotation = disableAr ? 0 : degreesToRadians(-90);

    return {
      ...originalConfig,
      disableAr,
      markerXRotation
    };
  }, [arEnabled, isArSupported]);
};

export default useSceneConfig;
