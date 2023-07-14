import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { HomeButton, HomeMain, HomeNavbar } from "./styles";

export const Home = () => {
  return (
    <>
      <Header></Header>
      <HomeNavbar>
        <h1>Velocidade e experiência em um lugar feito para você</h1>
        <p>Um ambiente feito para você explorar o seu melhor</p>

        <div>
          <HomeButton>Carros</HomeButton>
          <HomeButton>Motos</HomeButton>
        </div>
      </HomeNavbar>
      <HomeMain></HomeMain>
      <Footer />
    </>
  );
};
