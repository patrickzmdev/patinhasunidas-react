import fotoContainer from "../../assets/papel-de-parede-patinhas.jpg";
import fotoLogo from "../../assets/logoNavbar.png";
import "../Events/styles.css";


function Historia() {
  return (
    <div className="p-1 mx-auto bg-custom-color sm:p-10 md:p-16">
      <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
        <img
          src={fotoLogo}
          alt="foto-menu"
          className="w-full h-auto sm:h-64 object-cover md:h-7 xl:h-auto border-2 border-cyan-950"
        />
        <div className=" pb-1 pt-4 m-6 mx-auto -mt-28 bg-white space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md">
          <div className="space-y-2 mt-20">
            <li
              rel="noopener noreferrer"

              className="inline-block text-2xl font-semibold sm:text-3xl m-9"
            >
              NOSSA HISTÓRIA
            </li>
          </div>
          <div className="container-texto overflow-y-auto bg-white max-h-full md:max-h-full">
            <img
              src={fotoContainer}
              alt="foto-container"
              className="img-container"
            />
            <div className="text-zinc-950 text-1xl font-serif m-2">
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;Ao longo dos 5 anos do Instituto Patinhas
                Unidas SC, já foi possível resgatar e acolher mais de duzentos de
                animais, tratando-os de suas feridas físicas e psicológicas, com o
                apoio de toda uma equipe técnica: com médica veterinária,
                adestrador e voluntários, que se doam intensamente em prol da causa
                animal, reabilitando estes animais e dando-lhes condições de serem
                adotados novamente por famílias criteriosamente escolhidas e
                monitoradas pelo instituto, garantindo que estes animais não
                retornem às ruas novamente.
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;Somos um instituto sem fins lucrativos, e
                além de nosso trabalho voluntário, mantemos tudo através de
                doações. Frequentemente realizamos eventos como bazares solidários
                ou rifas para angariar fundos a fim de continuarmos desenvolvendo
                este trabalho, dando a chance de um lar para inúmeros animais em
                condições de abandono, expostos ao frio, fome, sede e a maldade
                humana nas ruas.
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;Somente no ano de 2023 foram realizadas,
                por meio do Instituto 44 adoções, 42 animais resgatados, 119
                vacinas aplicadas e 53 castrações.
              </p>
            </div>
          </div>

        </div>

      </div>


    </div>
  );
}

export default Historia;
