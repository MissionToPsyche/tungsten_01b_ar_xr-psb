import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState
} from 'react';

interface SettingsContextValue {
  arEnabled: boolean;
  toggleAR: () => void;
}
const SettingsContext = createContext<SettingsContextValue | null>(null);

interface SettingsProviderProps {
  children: ReactNode;
}
function SettingsProvider({ children }: SettingsProviderProps) {
  const [arEnabled, setArEnabled] = useState(true);

  const toggleAR = useCallback(() => {
    setArEnabled((prev) => !prev);
  }, []);
  return (
    <SettingsContext.Provider value={{ arEnabled, toggleAR }}>
      {children}
    </SettingsContext.Provider>
  );
}

function useSetting() {
  const context = useContext(SettingsContext);

  if (!context) {
    throw new Error("useSetting must be used within SettingsProvider")
  }

  return context;
}

function useSceneConfig() {
  const { arEnabled } = useSetting();

  return { arDisable: !arSupported || arDisableEnvironment || !arEnabled };
}

export { SettingsProvider, useSetting, useSceneConfig };
