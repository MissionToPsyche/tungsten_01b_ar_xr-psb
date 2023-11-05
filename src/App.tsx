import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import ViewManager from './view/ViewManager.tsx';
import theme from './common/theme.ts';

function App() {
  return (
    <ChakraProvider theme={theme} resetCSS={false}>
      <ViewManager />
    </ChakraProvider>
  );
}

export default App;
