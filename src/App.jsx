import { ThemeProvider } from "components/context/ThemeContext";
import MainPage from "components/pages/MainPage";

function App() {
  return (
    <ThemeProvider>
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
