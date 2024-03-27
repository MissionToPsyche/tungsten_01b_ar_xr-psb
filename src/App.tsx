import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import ViewManager from './view/ViewManager.tsx';
import theme from './common/theme.ts';
import ModalProvider from './common/modal/ModalProvider.tsx';
import { AnimationProvider } from './animations/AnimationProvider.tsx';
import AppErrorBoundary from './error/AppErrorBoundary.tsx';
import { AudioProvider } from './audio/AudioProvider.tsx';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <ChakraProvider theme={theme} resetScope=".ck-reset">
      <AppErrorBoundary>
        <RecoilRoot>
          <ModalProvider>
            <AudioProvider>
              <AnimationProvider>
                <ViewManager />
              </AnimationProvider>
            </AudioProvider>
          </ModalProvider>
        </RecoilRoot>
      </AppErrorBoundary>
    </ChakraProvider>
  );
}

export default App;
