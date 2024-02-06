import React, { PropsWithChildren, useCallback, useState } from 'react';
import SettingsContext from './settings-context.ts';

export const SettingsProvider: React.FC<PropsWithChildren> = ({children}) => {
  const [arEnabled, setArEnabled] = useState(true);

  const toggleAR = useCallback(() => {
    setArEnabled(prev => !prev);
  }, []);

  const sceneConfig = {
    arDisabled: !arSupported || arDisabledEnvironmentVar ||
    arEnabled,
  }:
  const contextValue: SettingContextProps = {
    arEnable: arEnabled, toggleAR: toggleAR, sceneConfig: sceneConfig
  }
  return <SettingsContext.Provider value={{arEnabled, toggleAR, sceneConfig}}>{children}</SettingsContext.Provider>
}