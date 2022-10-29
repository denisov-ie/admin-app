import ThemeProvider from "./components/context/ThemeContext/ThemeContext";
import MainPage from "./components/pages/MainPage/MainPage";

function App() {
  return (
    <ThemeProvider>
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
