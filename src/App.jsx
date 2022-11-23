import { ThemeProvider } from "context/ThemeContext";
import OrderPage from "features/OrderPage";

function App() {
  return (
    <ThemeProvider>
      <OrderPage />
    </ThemeProvider>
  );
}

export default App;
