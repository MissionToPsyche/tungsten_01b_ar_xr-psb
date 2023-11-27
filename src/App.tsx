import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import ViewManager from './view/ViewManager.tsx';
import theme from './common/theme.ts';
import ModalProvider from './common/modal/ModalProvider.tsx';
import { AnimationProvider } from './animations/AnimationProvider.tsx';

function App() {
  return (
    <ChakraProvider theme={theme} resetCSS={false}>
      <ModalProvider>
        <AnimationProvider>
          <ViewManager />
        </AnimationProvider>
      </ModalProvider>
    </ChakraProvider>
  );
}

export default App;
