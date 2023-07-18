import { CardAuction } from "../../components/CardAuction";
import { CardVehicle } from "../../components/CardVehicle";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ListAuction } from "../../components/ListAuction";
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
      <HomeMain>
        <ListAuction title={"Leilão"}>
          <CardAuction />
          <CardAuction />
          <CardAuction />
          <CardAuction />
        </ListAuction>

        <ListAuction title={"Carros"}>
          <CardVehicle />
          <CardVehicle />
          <CardVehicle />
          <CardVehicle />
          <CardVehicle />
        </ListAuction>

        <ListAuction title={"Motos"}>
          <CardVehicle />
          <CardVehicle />
          <CardVehicle />
          <CardVehicle />
          <CardVehicle />
        </ListAuction>
      </HomeMain>
      <Footer />
    </>
  );
};
