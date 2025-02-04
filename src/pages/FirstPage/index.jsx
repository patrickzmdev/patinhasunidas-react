import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, PawPrint } from "lucide-react";
import { Link } from 'react-router-dom';

// Assume these images are imported correctly
import foto2 from "../../assets/fotomenu2.jpg";
import foto3 from "../../assets/fotomenu4.png";
import fotoMenu from "../../assets/imgtextcontainer.jpg";

function HomePage () {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [foto2, foto3];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-br from-red-50 to-white min-h-screen">
      {/* Hero Carousel Section */}
      <motion.div
        className="relative h-[70vh] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/40 to-transparent" />
        {slides.map((slide, index) => (
          <motion.img
            key={index}
            src={slide}
            alt={`Slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${activeSlide === index ? "opacity-100" : "opacity-0"
              }`}
            initial={{ scale: 1.1 }}
            animate={{ scale: activeSlide === index ? 1 : 1.1 }}
            transition={{ duration: 5 }}
          />
        ))}
        <div className="absolute bottom-10 left-10 z-20 text-white p-6 bg-black/30 rounded-xl">
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <PawPrint className="mr-3 text-red-400" /> Adote com Amor
          </h2>
          <p className="text-lg max-w-md">
            Transforme uma vida. Cada adoção conta uma história de esperança e
            compaixão.
          </p>
        </div>
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="container mx-auto px-4 py-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            className="rounded-2xl overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={fotoMenu}
              alt="Adoção de Animais"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl font-extrabold text-red-600 mb-6 flex items-center">
              <Heart className="mr-4 text-red-400" />A Importância da Adoção
            </h1>

            <div className="space-y-4 text-gray-700">
              <div className="bg-red-50 p-4 rounded-xl border-l-4 border-red-500">
                <p className="font-semibold">
                  Segundo o IBGE, 44,13% dos lares brasileiros têm ao menos um
                  cão.
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Mas ainda existem mais de 20 milhões de cães abandonados.
                </p>
              </div>

              <p>
                Estes animais sofrem constantemente com maus-tratos, falta de
                alimento e riscos nas ruas. A adoção é uma forma poderosa de
                mudar essa realidade e oferecer uma segunda chance.
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link
                to="/pets"
                className="bg-red-500 text-white px-8 py-3 rounded-full text-lg font-bold hover:bg-red-600 transition-colors"
              >
                Adote Agora
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;
