import { ChakraProvider } from '@chakra-ui/react';
import ViewManager from './view/ViewManager.tsx';
import theme from './common/theme.ts';
import ModalProvider from './common/modal/ModalProvider.tsx';
import { AnimationProvider } from './animations/AnimationProvider.tsx';
import AppErrorBoundaryView from './view/AppErrorBoundaryView.tsx';

function App() {
  return (
    <ChakraProvider theme={theme} resetCSS={false}>
      <AppErrorBoundaryView>
        <ModalProvider>
          <AnimationProvider>
            <ViewManager />
          </AnimationProvider>
        </ModalProvider>
      </AppErrorBoundaryView>
    </ChakraProvider>
  );
}
export default App;
