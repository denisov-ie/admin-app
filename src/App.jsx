import { ThemeProvider } from "components/context/ThemeContext";
import OrderPage from "components/features/OrderPage";

function App() {
  return (
    <ThemeProvider>
      <OrderPage />
    </ThemeProvider>
  );
}

export default App;
