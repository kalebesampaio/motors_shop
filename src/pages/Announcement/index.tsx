import {
  AnnouncementAside,
  AnnouncementDivComments,
  AnnouncementDivDescription,
  AnnouncementDivImg,
  AnnouncementDivInfo,
  AnnouncementMain,
  AnnouncementMakeComment,
  AnnouncementStyle,
  AsideImages,
  AsideInfo,
} from "./styles";

export const Announcement = () => {
  return (
    <>
      <AnnouncementStyle>
        <AnnouncementMain>
          <AnnouncementDivImg>
            <figure>
              <img
                src="https://png.pngtree.com/png-clipart/20180613/ourmid/pngtree-fashion-car-private-car-orange-red-car-simulation-illustration-png-image_4484916.png"
                alt=""
              />
            </figure>
          </AnnouncementDivImg>
          <AnnouncementDivInfo>
            <h2>Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200 </h2>
            <div className="infoContainer">
              <ul>
                <li>2013</li>
                <li>0 KM</li>
              </ul>
              <p>R$ 00.000,00</p>
            </div>
            <button>Comprar</button>
          </AnnouncementDivInfo>
          <AnnouncementDivDescription>
            <h3>Descrição</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </AnnouncementDivDescription>
          <AnnouncementDivComments>
            <h3>Comentários</h3>
            <ul>
              <li>
                <div>
                  <p>JL</p> <h4>Júlia Lima</h4> <span>há 3 dias</span>
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </li>

              <li>
                <div>
                  <p>JL</p> <h4>Júlia Lima</h4> <span>há 3 dias</span>
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </li>

              <li>
                <div>
                  <p>JL</p> <h4>Júlia Lima</h4> <span>há 3 dias</span>
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </li>

              <li>
                <div>
                  <p>JL</p> <h4>Júlia Lima</h4> <span>há 3 dias</span>
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </li>

              <li>
                <div>
                  <p>JL</p> <h4>Júlia Lima</h4> <span>há 3 dias</span>
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </li>
            </ul>
          </AnnouncementDivComments>
          <AnnouncementMakeComment>
            <div className="userInfo">
              <p>JL</p> <h4>Júlia Lima</h4>
            </div>
            <div className="makeComment">
              <textarea
                name=""
                id=""
                placeholder="Carro muito confortável, foi uma ótima experiência de compra..."
              ></textarea>
              <button>Comentar</button>
            </div>
          </AnnouncementMakeComment>
        </AnnouncementMain>
        <AnnouncementAside>
          <AsideImages>
            <h3>Fotos</h3>
            <ul>
              <li>
                <img
                  src="https://png.pngtree.com/png-clipart/20180613/ourmid/pngtree-fashion-car-private-car-orange-red-car-simulation-illustration-png-image_4484916.png"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://png.pngtree.com/png-clipart/20180613/ourmid/pngtree-fashion-car-private-car-orange-red-car-simulation-illustration-png-image_4484916.png"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://png.pngtree.com/png-clipart/20180613/ourmid/pngtree-fashion-car-private-car-orange-red-car-simulation-illustration-png-image_4484916.png"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://png.pngtree.com/png-clipart/20180613/ourmid/pngtree-fashion-car-private-car-orange-red-car-simulation-illustration-png-image_4484916.png"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://png.pngtree.com/png-clipart/20180613/ourmid/pngtree-fashion-car-private-car-orange-red-car-simulation-illustration-png-image_4484916.png"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://png.pngtree.com/png-clipart/20180613/ourmid/pngtree-fashion-car-private-car-orange-red-car-simulation-illustration-png-image_4484916.png"
                  alt=""
                />
              </li>
            </ul>
          </AsideImages>
          <AsideInfo>
            <div className="userInfo">
              <p>JL</p>
            </div>
            <h3>Júlia Lima</h3>
            <p className="info">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </p>
            <button>Ver todos anuncios</button>
          </AsideInfo>
        </AnnouncementAside>
      </AnnouncementStyle>
    </>
  );
};
