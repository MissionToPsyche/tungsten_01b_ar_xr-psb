import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode
} from 'react';
import { SceneConfig } from '../../scene/types/scene-config.ts';
import getSceneConfig from '../../scene/get-scene-config.ts';

// Create SettingContext
const SettingContext = createContext<SceneConfig | undefined>(undefined);

// Create a custom hook to use the SettingContext
export const useSettingContext = (): SceneConfig => {
  const context = useContext(SettingContext);
  if (!context) {
    throw new Error(
      'useSettingContext must be used within a SettingContextProvider'
    );
  }
  return context;
};

// Provider component for SettingContext
interface SettingContextProviderProps {
  children: ReactNode;
}

const isArSupported = (): boolean => {
  try {
    const canvas = document.createElement('canvas');
    const isWebGLSupported = !!(
      canvas.getContext('webgl') ?? canvas.getContext('experimental-webgl')
    );

    canvas.remove();
    const isWebRTCSupported = !!navigator.mediaDevices.getUserMedia;

    return isWebGLSupported && isWebRTCSupported;
  } catch (error) {
    return false;
  }
};

export const SettingContextProvider: React.FC<SettingContextProviderProps> = ({
  children
}) => {
  const [arSupported, setArSupported] = useState(true);

  useEffect(() => {
    const isSupported = isArSupported();
    setArSupported(isSupported);
  }, []);

  const sceneConfig = useMemo(() => {
    const originalConfig = getSceneConfig();

    return {
      ...originalConfig,
      disableAr: arSupported ? originalConfig.disableAr : false
    };
  }, [arSupported]);

  return (
    <SettingContext.Provider value={sceneConfig}>
      {children}
    </SettingContext.Provider>
  );
};
