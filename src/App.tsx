import { ToastContainer } from "react-toastify";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/Global";
import { AuthProvider } from "./providers/AuthProvider";
import TechsProvider from "./providers/UsersProvider";
import { RoutesMain } from "./routes";

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <AuthProvider>
        <TechsProvider>
          <Header />
          <RoutesMain />
          <Footer />
        </TechsProvider>
      </AuthProvider>
    </>
  );
}

export default App;
