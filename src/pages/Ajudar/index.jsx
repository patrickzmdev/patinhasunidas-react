import caotriste from "../../assets/cao-abandonado.jpg";
import qrcode from "../../assets/qr-code.jpg";
import React, { useRef, useState } from "react";
import { Heart, Copy, X } from "lucide-react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Ajudar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const textoParaCopiarRef = useRef(null);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textoParaCopiarRef.current.value);
      toast.success(
        "Linha copiada com sucesso, acesse o App do seu Banco para concluir o pix."
      );
    } catch (err) {
      toast.error("Erro ao copiar texto.");
      console.error("Erro ao copiar texto: ", err);
    }
  };

  return (
    <div className="bg-gradient-to-br from-red-50 to-white h-max">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="px-6 md:px-12 pb-12">
            <div className="text-center mb-10">
              <h1 className="text-4xl font-extrabold text-red-600 flex items-center justify-center">
                <Heart className="mr-4 text-red-400" />
                Apadrinhamento de Pets
              </h1>
              <p className="text-gray-500 mt-2">
                Ajude-nos a continuar nosso trabalho
              </p>
            </div>

            <motion.div
              className="mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <img
                src={caotriste}
                alt="Cão abandonado"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </motion.div>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <motion.div
                className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-bold text-xl text-red-600 mb-4">
                  Como funciona o apadrinhamento?
                </h3>
                <p>
                  Com um pequeno valor mensal, você pode ser dinda ou dindo de
                  um doguinho que ainda não encontrou uma família. Esse valor
                  estabelecido por você é a nossa principal fonte de recurso e
                  nos ajuda a garantir a alimentação, medicamentos e a
                  hospedagem que eles ficam.
                </p>
              </motion.div>

              <p>
                Para quem já teve ou tem um doguinho sabe que há custos, agora
                imagina nós do Instituto Patinhas Unidas SC com mais de 25 cães
                sob nossa responsabilidade e sem nenhum recurso fixo?
              </p>

              <div className="flex flex-col items-center space-y-4 mt-8">
                <motion.button
                  className="bg-red-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-red-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsVisible(true)}
                >
                  Quero Ajudar
                </motion.button>

                {isVisible && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                    <motion.div
                      className="bg-white rounded-2xl p-6 max-w-md w-full"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                    >
                      <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-bold text-red-600">
                          PIX QR Code
                        </h2>
                        <button
                          onClick={() => setIsVisible(false)}
                          className="p-2 hover:bg-gray-100 rounded-full"
                        >
                          <X className="w-6 h-6" />
                        </button>
                      </div>

                      <img
                        src={qrcode}
                        alt="QR Code PIX"
                        className="w-full h-auto mb-4 rounded-lg"
                      />

                      <div className="relative">
                        <textarea
                          ref={textoParaCopiarRef}
                          className="w-full p-2 border rounded-lg text-sm bg-gray-50"
                          readOnly
                          rows={4}
                          value="00020101021126360014br.gov.bcb.pix0114476477850001525204000053039865802BR5925INSTITUTO PATINHAS UNIDAS6008BRASILIA62070503***63046951"
                        />
                        <button
                          onClick={handleCopy}
                          className="absolute right-2 top-2 p-0 hover:bg-gray-200 rounded-full"
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  </div>
                )}

                <a
                  href="https://www.instagram.com/institutopatinhasunidassc/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-red-500 hover:text-red-600 font-medium"
                >
                  Siga-nos no Instagram
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Ajudar;
