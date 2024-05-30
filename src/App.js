import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
// import { useState } from 'react';
// import { ThemeProvider } from 'styled-components';
// import { darkTheme, lightTheme } from 'context/ThemeContext';

function App() {
  // const [themeMode, setThemeMode] = useState(lightTheme);
  // const theme = themeMode === 'lightTheme' ? lightTheme : darkTheme;

  return (
    // <ThemeProvider theme={theme}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        {/* <Route path="/" element={<Home themeMode={themeMode} />}></Route> */}
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
    // </ThemeProvider>
  );
}

export default App;
