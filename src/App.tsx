import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import ViewManager from './view/ViewManager.tsx';
import theme from './common/theme.ts';
import ModalProvider from './common/modal/ModalProvider.tsx';
import { AnimationProvider } from './animations/AnimationProvider.tsx';
import AppErrorBoundary from './error/AppErrorBoundary.tsx';
import { AudioProvider } from './audio/AudioProvider.tsx';
import SettingsProvider from './settings/SettingsProvider.tsx';

function App() {
  return (
    <ChakraProvider theme={theme} resetCSS={false}>
      <AppErrorBoundary>
        <ModalProvider>
          <AudioProvider>
            <AnimationProvider>
              <SettingsProvider>
                <ViewManager />
              </SettingsProvider>
            </AnimationProvider>
          </AudioProvider>
        </ModalProvider>
      </AppErrorBoundary>
    </ChakraProvider>
  );
}

export default App;
