import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { Heart, Users, Trophy } from "lucide-react";
import "./styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import fotoLogo from "../../assets/logoNavbar.png";
import foto1 from "../../assets/tuane.jpg";
import foto2 from "../../assets/eve.jpg";
import foto3 from "../../assets/kely.jpg";
import foto4 from "../../assets/amanda.jpg";

const Historia = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
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
          {/* Logo Section */}
          <div className="py-8 text-center">
            <motion.img
              src={fotoLogo}
              alt="Logo Patinhas Unidas"
              className="mx-auto max-h-32 object-contain"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            />
          </div>

          {/* History Content */}
          <div className="px-6 md:px-12 pb-12">
            <div className="text-center mb-10">
              <h1 className="text-4xl font-extrabold text-red-600 flex items-center justify-center">
                <Heart className="mr-4 text-red-400" />
                Nossa História
              </h1>
              <p className="text-gray-500 mt-2">
                por <span className="font-semibold">Patinhas Unidas</span>
              </p>
            </div>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              {/* Achievements Highlight */}
              <motion.div
                className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500 flex items-center"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Trophy className="mr-4 text-red-500 w-12 h-12" />
                <div>
                  <h3 className="font-bold text-xl text-red-600">
                    Conquistas em 2023
                  </h3>
                  <ul className="list-disc list-inside text-base">
                    <li>44 Adoções</li>
                    <li>42 Animais Resgatados</li>
                    <li>119 Vacinas Aplicadas</li>
                    <li>53 Castrações</li>
                  </ul>
                </div>
              </motion.div>

              {/* Story Paragraphs */}
              <p>
                Ao longo dos 5 anos do Instituto Patinhas Unidas SC, já foi
                possível resgatar e acolher mais de duzentos animais,
                tratando-os de suas feridas físicas e psicológicas. Contamos com
                uma equipe técnica dedicada: médica veterinária, adestrador e
                voluntários que se doam intensamente em prol da causa animal.
              </p>

              <p>
                Somos um instituto sem fins lucrativos, mantido através de
                doações. Realizamos eventos como bazares solidários e rifas para
                angariar fundos e continuar nosso trabalho de dar um lar a
                animais abandonados, protegendo-os do frio, fome e maldade.
              </p>
            </div>

            <div className="bg-gray-50 py-12">
              <h2 className="text-4xl font-extrabold text-red-600 flex items-center justify-center">
                <Users className="mr-4 text-red-400" />
                Nossos Colaboradores
              </h2>

              <Slider {...settings}>
                {[foto1, foto2, foto3, foto4].map((img, idx) => (
                  <div key={idx} className="px-2 outline-none">
                    <img
                      src={img}
                      alt={`Colaborador ${idx + 1}`}
                      className="w-full h-80 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Historia;
