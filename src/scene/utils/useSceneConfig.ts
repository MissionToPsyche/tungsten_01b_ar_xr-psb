import { useMemo } from 'react';
import { SceneConfig } from '../types/scene-config.ts';
import { useSettingContext } from '../../view/views/SettingContext.tsx';
import getSceneConfig from '../get-scene-config.ts';

const useSceneConfig = (): SceneConfig => {
  const { disableAr } = useSettingContext();

  return useMemo(() => {
    return {
      ...getSceneConfig(),
      disableAr,
    };
  }, [disableAr]);
};

export default useSceneConfig;
