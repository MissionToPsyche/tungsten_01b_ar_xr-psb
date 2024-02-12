import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import ViewManager from './view/ViewManager.tsx';
import theme from './common/theme.ts';
import ModalProvider from './common/modal/ModalProvider.tsx';
import { AnimationProvider } from './animations/AnimationProvider.tsx';
import AppErrorBoundary from './error/AppErrorBoundary.tsx';
import { SettingsProvider } from './view/views/modal/SettingsProvider.tsx';
import Settings from './view/views/modal/Settings.tsx';

function App() {
  return (
    <ChakraProvider theme={theme} resetCSS={false}>
      <AppErrorBoundary>
        <ModalProvider>
          <AnimationProvider>
            <SettingsProvider>
              <Settings />
              <ViewManager />
            </SettingsProvider>
          </AnimationProvider>
        </ModalProvider>
      </AppErrorBoundary>
    </ChakraProvider>
  );
}
export default App;
