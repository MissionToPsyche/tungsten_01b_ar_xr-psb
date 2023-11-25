import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import ViewManager from './view/ViewManager.tsx';
import theme from './common/theme.ts';
import ModalProvider from './common/modal/ModalProvider.tsx';

function App() {
  return (
    <ChakraProvider theme={theme} resetCSS={false}>
      <ModalProvider>
        <ViewManager />
      </ModalProvider>
    </ChakraProvider>
  );
}

export default App;
