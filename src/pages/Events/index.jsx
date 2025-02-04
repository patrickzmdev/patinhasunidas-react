import fotoEvento from "../../assets/evento1.jpg";
import fotoEvento2 from "../../assets/evento2.jpg";
import fotoEvento3 from "../../assets/evento3.jpg";
import fotoEvento4 from "../../assets/evento4.jpg";
import "./styles.css";

import React, { useState } from "react";
import { Calendar, Image, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Events() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: fotoEvento2, alt: "Evento 2" },
    { src: fotoEvento3, alt: "Evento 3" },
    { src: fotoEvento4, alt: "Evento 4" },
  ];

  const allImages = [{ src: fotoEvento, alt: "Evento Principal" }, ...images];

  return (
    <div className="bg-gradient-to-br from-red-50 to-white min-h-screen">
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
                <Calendar className="mr-4 text-red-400" />
                Primeiro Evento Audotei
              </h1>
              <p className="text-gray-500 mt-2">
                por <span className="font-semibold">Patinhas Unidas</span>
              </p>
            </div>

            <motion.div
              className="mb-8 aspect-w-16 aspect-h-9 rounded-xl overflow-hidden cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              onClick={() => setSelectedImage(allImages[0])}
            >
              <img
                src={fotoEvento}
                alt="Evento Principal"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                O primeiro Audotei do Instituto Patinhas Unidas SC, realizado em
                fevereiro de 2024, foi um momento de grande celebração para a
                comunidade canina. Contamos com a presença de mais de 40 cães e
                seus tutores no local, com ajuda de voluntários também foi
                possível realizar uma feirinha de adoção, onde os cães
                resgatados procuravam por novos lares.
              </p>

              <motion.div
                className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center">
                  <Image className="mr-4 text-red-500 w-12 h-12" />
                  <div>
                    <h3 className="font-bold text-xl text-red-600">
                      Destaques do Evento
                    </h3>
                    <ul className="list-disc list-inside text-base mt-2">
                      <li>Distribuição de petiscos e brindes</li>
                      <li>Arrecadação de rações</li>
                      <li>Bazar solidário</li>
                      <li>Palestras com especialistas</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <p>
                Durante o evento, foram distribuídos petiscos, brindes e picolés
                pet para que os cães e, ao mesmo tempo, arrecadamos recursos
                para a causa animal. Além disso, foi realizada uma arrecadação
                de rações para os cães desamparados, bem como um bazar solidário
                que ofereceu opções para os participantes.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                {images.map((img, idx) => (
                  <motion.div
                    key={idx}
                    className="relative aspect-w-4 aspect-h-3 rounded-xl overflow-hidden cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setSelectedImage(img)}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors z-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-6 h-6" />
              </motion.button>
              <div className="h-full">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Events;
