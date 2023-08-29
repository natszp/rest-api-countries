
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
//import './App.css';

import Bar from './components/Layout/Bar';
import RootLayout from './pages/RootLayout'
import CountryItemDetailPage from './pages/CountryItemDetailPage';
import { loader } from './pages/CountryItemDetailPage'

import * as React from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';


export const ColorModeContext = React.createContext({ toggleColorMode: () => { } });


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,

  },
  {
    path: ':name',
    id: 'detailPage',
    loader: loader,
    element: <CountryItemDetailPage />,
  }
]);


function App() {

  return (
    <>
      <Box>
        <Bar />
        <RouterProvider router={router} />
      </Box>
    </>
  );
}


export default function ToggleColorMode() {
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}


