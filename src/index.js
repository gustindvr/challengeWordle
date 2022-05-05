import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './components/contexts/ThemeContext';

import './styles/index.css';

const theme = extendTheme({
  components: {
    Button: {
      variants: {
        solid: (props) => ({
          bg: 'transparent',
          padding: '0',
          _hover: {
            bg: 'transparent',
          },
        }),
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={theme}>
    <ThemeProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeProvider>
  </ChakraProvider>
);
