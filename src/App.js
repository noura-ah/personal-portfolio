import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react';
import Main from './pages/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ResponsiveAppBar from './contents/ResponsiveAppBar';
import { ThemeProvider, createTheme, } from '@mui/material/styles';
import { CssBaseline } from "@mui/material"
import ColorModeContext from './context/colorModeContext';
import  getDesignTokens  from './themes/darkLightModes'



function App() {

  const [mode, setMode] = React.useState('dark');
  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode) =>
          prevMode === 'light' ? 'dark' : 'light',
        );
      },
    }),
    [],
  );

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <div className="App">
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ResponsiveAppBar />
          <BrowserRouter>
            <Routes>
              <Route exact path='/personal-portfolio' element={<Main />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  );
}

export default App;
