import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import ViewManager from './view/ViewManager.tsx';

function App() {
  return (
    <ChakraProvider resetCSS={false}>
      <ViewManager />
    </ChakraProvider>
  );
}

export default App;
