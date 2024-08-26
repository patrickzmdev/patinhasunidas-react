import caotriste from "../../assets/cao-abandonado.jpg";
import fotoContainer from "../../assets/papel-de-parede-patinhas.jpg";
import qrcode from "../../assets/qr-code.jpg";
import "../Events/styles.css";
import {useRef, useState} from "react";

function Ajudar () {
  const [isVisible, setIsVisible] = useState(false);
  const textoParaCopiarRef = useRef(null);

  const handleButtonClick = () => {
    setIsVisible(!isVisible);
  };

  const handleCloseModal = () => {
    setIsVisible(false);
  };

  const handleCopy = async () => {
    const textoParaCopiar = document.getElementById('textoParaCopiar');
    try {
      await navigator.clipboard.writeText(textoParaCopiar.value);
      alert('Linha copiada com sucesso, acesse o App do seu Banco para concluir o pix.');
    } catch (err) {
      console.error('Erro ao copiar texto: ', err);
    }
  };

  return (
    <>
      <div className="p-1 mx-auto sm:p-4 bg-custom-color2 md:p-1">
        <div className="flex flex-col items-center justify-center max-w-xs mx-auto bg-custom-color1 space-y-4 p-4">
          <button
            type="button"
            className="w-full px-8 py-3 font-semibold bg-custom-color2 rounded-full text-white"
            onClick={handleButtonClick}
          >
            Clique aqui se você deseja nos ajudar
          </button>

          {isVisible && (
            <div className="modal-overlay" onClick={handleCloseModal}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <li className="inline-block text-2xl font-semibold text-black sm:text-3xl m-8">
                  Pix-QRCODE
                </li>

                <img
                  src={qrcode}
                  alt="qrcode"
                  className="object-cover object-center max-w-full rounded-md h-auto"
                />

                <li className="inline-block text-2xl font-semibold text-black sm:text-3xl m-8">
                  Linha Digitável
                </li>

                <textarea
                  ref={textoParaCopiarRef}
                  className="w-full h-32 p-2 border rounded-lg resize-none"
                  rows="3"
                  cols="50"
                  id="textoParaCopiar"
                >
                  00020101021126360014br.gov.bcb.pix0114476477850001525204000053039865802BR5925INSTITUTO PATINHAS UNIDAS6008BRASILIA62070503***63046951
                </textarea>

                <button
                  id="copyButton"
                  className="w-full px-8 py-3 font-semibold bg-custom-color rounded-full text-white"
                  onClick={handleCopy}
                >
                  Copiar Linha Digitável
                </button>

                <button
                  className="w-full px-8 py-3 mt-4 font-semibold bg-gray-600 rounded-full text-white"
                  onClick={handleCloseModal}
                >
                  Fechar
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="p-1 mx-auto bg-custom-color2 sm:p-10 md:p-16">
        <div className="flex flex-col items-center max-w-3xl mx-auto overflow-hidden rounded">
          <img
            src={caotriste}
            alt="foto-menu"
            className="w-full h-auto sm:h-64 object-cover md:h-72 xl:h-auto border-2 border-cyan-950"
          />

          <div className="p-8 pb-1 m-8 mx-auto bg-white mt-10 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md">
            <div className="space-y-2">
              <li className="inline-block text-2xl font-playwrite sm:text-3xl m-4">
                Apadrinhamento de Pets
              </li>
            </div>

            <div className="container-texto overflow-y-auto object-cover max-h-full md:max-h-full">
              <img
                src={fotoContainer}
                alt="foto-container"
                className="img-container object-cover"
              />

              <div className="text-zinc-950 text-1xl font-serif m-2">
                <p>
                  Para quem ama pets, mas não pode ter um em casa devido à falta de espaço e tempo, nosso grupo disponibiliza a opção de apadrinhamento.
                </p>
                <br />
                <p>Como isso funciona?</p>
                <br />
                <p>
                  Com um pequeno valor mensal, você pode ser dinda ou dindo de um doguinho que ainda não encontrou uma família. Esse valor estabelecido por você é a nossa principal fonte de recurso e nos ajuda a garantir a alimentação, medicamentos e a hospedagem que eles ficam.
                </p>
                <br />
                <p>
                  Para quem já teve ou tem um doguinho sabe que há custos, agora imagina nós do Instituto Patinhas Unidas SC com mais de 25 cães sob nossa responsabilidade e sem nenhum recurso fixo?
                </p>
                <br />
                <p>
                  Por isso que o apadrinhamento é a parte essencial para continuarmos nosso trabalho, sabendo o valor que podemos contar por mês fica mais fácil nos planejarmos para futuros resgates.
                </p>
                <br />
                <p>
                  Com esse gesto de amor e solidariedade você fortalece nosso trabalho e acolhe um anjinho desamparado até encontrarem uma família disposta a adotar e cuidar com todo amor que eles merecem.
                </p>

                <li className="inline-block text-2xl font-semibold sm:text-3xl m-9">
                  Para maiores detalhes, acesse nosso Instagram, clicando no botão abaixo:
                </li>

                <a
                  href="https://www.instagram.com/institutopatinhasunidassc/"
                  target="_blank"
                  title="Instagram"
                  className="flex items-center p-4 m-2 justify-center bg-custom-color rounded-md"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                    className="w-5 text-white h-5 m-1 fill-current"
                  >
                    <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.781 1.849-2.833 0.396-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.709-0.349-2.865-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.781-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.020 6.469 0.088 1.563 0.072 2.409 0.333 2.971 0.553 0.751 0.292 1.281 0.641 1.844 1.197 0.552 0.552 0.901 1.084 1.197 1.844 0.219 0.563 0.48 1.411 0.552 2.971 0.068 1.688 0.088 2.199 0.088 6.469s-0.020 4.781-0.088 6.469c-0.072 1.563-0.333 2.409-0.552 2.971-0.292 0.751-0.641 1.281-1.197 1.844-0.563 0.552-1.084 0.901-1.844 1.197-0.563 0.219-1.411 0.48-2.971 0.552-1.688 0.068-2.199 0.088-6.469 0.088s-4.781-0.020-6.469-0.088c-1.563-0.072-2.409-0.333-2.971-0.552-0.751-0.292-1.281-0.641-1.844-1.197-0.552-0.563-0.901-1.084-1.197-1.844-0.219-0.563-0.48-1.411-0.553-2.971-0.068-1.688-0.088-2.199-0.088-6.469s0.020-4.781 0.088-6.469c0.072-1.563 0.333-2.409 0.553-2.971 0.292-0.751 0.641-1.281 1.197-1.844 0.563-0.563 1.084-0.901 1.844-1.197 0.563-0.219 1.411-0.48 2.971-0.552 1.688-0.068 2.199-0.088 6.469-0.088zM16 7.776c-4.553 0-8.224 3.671-8.224 8.224s3.671 8.224 8.224 8.224 8.224-3.671 8.224-8.224-3.671-8.224-8.224-8.224zM16 9.929c3.349 0 6.071 2.723 6.071 6.071s-2.723 6.071-6.071 6.071-6.071-2.723-6.071-6.071 2.723-6.071 6.071-6.071zM23.125 7.443c-1.063 0-1.927 0.865-1.927 1.927s0.865 1.927 1.927 1.927 1.927-0.865 1.927-1.927-0.865-1.927-1.927-1.927z"></path>
                  </svg>

                  <span className="text-white">Instagram</span>
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
