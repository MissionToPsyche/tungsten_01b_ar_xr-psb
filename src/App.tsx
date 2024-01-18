// App.tsx
import { ChakraProvider } from '@chakra-ui/react';
import ViewManager from './view/ViewManager.tsx';
import theme from './common/theme.ts';
import ModalProvider from './common/modal/ModalProvider.tsx';
import { AnimationProvider } from './animations/AnimationProvider.tsx';
import AppErrorBoundaryView from './view/AppErrorBoundaryView.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Troubleshooting from './view/TroubleShooting.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="troubleshooting" element={<Troubleshooting />} />
        <Route
          path="*"
          element={
            <AppErrorBoundaryView>
              <ChakraProvider theme={theme} resetCSS={false}>
                <ModalProvider>
                  <AnimationProvider>
                    <ViewManager />
                  </AnimationProvider>
                </ModalProvider>
              </ChakraProvider>
            </AppErrorBoundaryView>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
