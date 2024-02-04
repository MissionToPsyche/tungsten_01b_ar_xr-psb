import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import ViewManager from './view/ViewManager.tsx';
import theme from './common/theme.ts';
import ModalProvider from './common/modal/ModalProvider.tsx';
import { AnimationProvider } from './animations/AnimationProvider.tsx';
import AppErrorBoundary from './error/AppErrorBoundary.tsx';
import { SettingContextProvider } from './view/views/SettingContext.tsx';

function App() {
  return (
    <ChakraProvider theme={theme} resetCSS={false}>
      <AppErrorBoundary>
        <ModalProvider>
          <AnimationProvider>
            <SettingContextProvider>
              <ViewManager />
            </SettingContextProvider>
          </AnimationProvider>
        </ModalProvider>
      </AppErrorBoundary>
    </ChakraProvider>
  );
}
export default App;
