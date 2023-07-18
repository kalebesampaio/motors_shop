import {
  CardVehicleDescription,
  CardVehicleImg,
  CardVehicleStyle,
  CardVehicleText,
  CardVehicleUser,
} from "./styles";

export const CardVehicle = () => {
  return (
    <CardVehicleStyle>
      <CardVehicleImg>
        <img
          src="https://png.pngtree.com/png-clipart/20180613/ourmid/pngtree-fashion-car-private-car-orange-red-car-simulation-illustration-png-image_4484916.png"
          alt=""
        />
      </CardVehicleImg>
      <CardVehicleText>
        <h3>
          Product title stays here - max 1 line Product title stays here -
          maximum 1 line
        </h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem...
        </p>
      </CardVehicleText>
      <CardVehicleUser>
        <span>SL</span>
        <p>Samuel Leão</p>
      </CardVehicleUser>
      <CardVehicleDescription>
        <div>
          <span>2019</span>
          <span>0 KM</span>
        </div>
        <p>R$ 00.000,00</p>
      </CardVehicleDescription>
    </CardVehicleStyle>
  );
};
