
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';

import Bar from './components/Layout/Bar';
import RootLayout from './pages/RootLayout'
import CountryItemDetails from './components/Countries/CountryItemDetails';
import CountryItemDetailPage from './pages/CountryItemDetailPage';
import { loader } from './pages/CountryItemDetailPage'

import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ColorModeContext = React.createContext({ toggleColorMode: () => { } });



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

  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <>
      <Box

      >
        {theme.palette.mode} mode
        <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
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


