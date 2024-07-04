import caotriste from "../../assets/cao-abandonado.jpg";
import fotoContainer from "../../assets/papel-de-parede-patinhas.jpg";
import qrcode from "../../assets/qr-code.jpg";
import "../Events/styles.css";
import { useState } from "react";


function Ajudar () {
  const [isVisible, setIsVisible] = useState(false);

  const handleButtonClick = () => {
    setIsVisible(!isVisible);
  };

  return(
    <>
      <div className="p-1 mx-auto sm:p-10 bg-custom-color2 md:p-16">
        <div className="flex flex-col  max-w-xs bg-custom-color1 mx-auto space-y-4 p-4 dark:bg-gray-800">
            <button type="button" className="w-10 px-8 py-3 font-semibold bg-custom-color rounded-full dark:text-gray-100" onClick={handleButtonClick}>Clique aqui se você deseja nos ajudar</button>

            {isVisible && (
            <div className="flex flex-col flex-none  max-w-20 h-auto object-center mx-auto space-y-4 p-4">
              <li
                rel="noopener noreferrer"
                className="inline-block text-2xl font-semibold sm:text-3xl m-8"
              >
                Pix-QRCODE
              </li>

                <img src={qrcode} alt="qrcode" className="object-cover object-center max-w-20 rounded-md h-auto" />
            </div>
            )}
        </div>
      </div>
       <div className="p-1 mx-auto bg-custom-color2 sm:p-10 md:p-16">
          <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
            <img
              src={caotriste}
              alt="foto-menu"
              className="w-full h-auto sm:h-64 object-cover md:h-7 xl:h-auto border-2 border-cyan-950"
            />

          <div className="p-1 pb-1 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md">
            <div className="space-y-2 mt-20">
              <li
                rel="noopener noreferrer"

                className="inline-block text-2xl font-semibold sm:text-3xl m-9"
              >
                Apadrinhamento de Pets
              </li>
            </div>
            <div className="container-texto overflow-y-auto object-cover max-h-full md:max-h-full">
              <img
                src={fotoContainer}
                alt="foto-container"
                className="img-container object-cover "
              />
              <div className="text-zinc-950 text-xl font-sans m-1">
              <p _msttexthash="1006226" _msthash="209">Para quem ama pets, mas não pode ter um em casa devido à falta de espaço e tempo, nosso grupo disponibiliza a opção de apadrinhamento.
              </p>
                <br/>
                <p _msttexthash="1006226" _msthash="209">Como isso funciona?
                </p>
                <br/>
                <p _msttexthash="1006226" _msthash="209">Com um pequeno valor mensal, você pode ser dinda ou dindo de um doguinho que ainda não encontrou uma família. Esse valor estabelecido por você é a nossa principal fonte de recurso e nos ajuda a garantir a alimentação, medicamentos e a hospedagem que eles ficam.
                </p>
                <br/>
                <p _msttexthash="1006226" _msthash="209">Para quem já teve ou tem um doguinho sabe que há custos, agora imagina nós do Instituto Patinhas Unidas SC com mais de 25 cães sob nossa responsabilidade e sem nenhuma recurso fixo?
                </p>
                <br/>
                <p _msttexthash="1006226" _msthash="209">Por isso que o apadrinhamento é a parte essencial para continuarmos nosso trabalho, sabendo o valor que podemos contar por mês fica mais fácil nos planejarmos para futuros resgates.

                </p>
                <br/>
                <p _msttexthash="1006226" _msthash="209">Com esse gesto de amor e solidariedade você fortalece nosso trabalho e acolhe um anjinho desamparado até encontrarem uma família disposta a adotar e cuidar com todo amor que eles merecem.
                </p>


                <li rel="noopener noreferrer"
                    className="inline-block text-2xl font-semibold sm:text-3xl m-9">
                Para maiores detalhes acesse nosso Instagram, clicando no icone abaixo:
              </li>
              <a rel="noopener noreferrer" href="https://www.instagram.com/institutopatinhasunidassc/" target="_blank" title="Instagram" class="flex items-center p-1">
						    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" class="w-10 h-10 fill-current">
							  <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
						  </svg>
					    </a>

              </div>
            </div>
          </div>
      </div>

    </div>

    </>
  );
}

export default Ajudar;
