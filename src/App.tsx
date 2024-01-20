import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import ViewManager from './view/ViewManager.tsx';
import theme from './common/theme.ts';
import ModalProvider from './common/modal/ModalProvider.tsx';
import { AnimationProvider } from './animations/AnimationProvider.tsx';
import DebugErrorBoundary from './common/components/DebugErrorBoundary.tsx';

function App() {
  return (
    <ChakraProvider theme={theme} resetCSS={false}>
      <DebugErrorBoundary>
        <ModalProvider>
          <AnimationProvider>
            <ViewManager />
          </AnimationProvider>
        </ModalProvider>
      </DebugErrorBoundary>
    </ChakraProvider>
  );
}

export default App;
