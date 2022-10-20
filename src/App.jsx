import MainPage from './components/pages/MainPage/MainPage';

import ThemeProvider from "./components/shared/ThemeContext/ThemeContext";

function App() {
  return (
    <ThemeProvider>
        <MainPage />
    </ThemeProvider>
  );
}

export default App;
