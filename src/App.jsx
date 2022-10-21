import ThemeProvider from "./components/shared/ThemeContext/ThemeContext";
import MainPage from "./components/pages/MainPage";

function App() {
  return (
    <ThemeProvider>
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
