import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ColorModeScript } from '@chakra-ui/react';
import theme, { ThemeType } from './common/theme.ts';

const initialColorMode = (theme as ThemeType).config.initialColorMode;

const root = document.getElementById('root');

if (!root) {
  throw new Error(
    'Unable to locate the root element. Please make sure that there is a DOM element with the ID "root"'
  );
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={initialColorMode} />
    <App />
  </React.StrictMode>
);
