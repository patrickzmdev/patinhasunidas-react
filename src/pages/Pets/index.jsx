import amora from "../../assets/amora, 13 anos, vacinada, castrada, femea.jpg";
import angel from "../../assets/angel femea castrada adulta.jpg";
import chow from "../../assets/Chow, 7 anos, castrado, vacinado, macho.jpg";
import estefan from "../../assets/Estefan, 14 anos, macho, castrado e vacinado.jpg";
import guga from "../../assets/Guga, idoso, porte G, castrado e vacinado 8 anos.jpeg";
import guinho from "../../assets/Guinho, 13 anos, vacinado, castrado.jpg";
import guria from "../../assets/Guria, 12 anos, resgatada do Rio grande do sul.jpg";
import homenzinho from "../../assets/homenzinho 4 anos macho castrado vacinado.jpg";
import horacio from "../../assets/horacio 4 anos macho castrado vacinado.jpg";
import jack from "../../assets/jack vacinado castrado macho 3 anos.jpg";
import julie from "../../assets/julie 3 anos castrada vacinada femea.jpg";
import laikito from "../../assets/Laikito, 2 ano, vacinado, castrado, macho.jpg";
import lua from "../../assets/Lua, 4 anos, fêmea, vacinada, castrada.jpg";
import maezinha from "../../assets/maezinha 4 anos vacinada castrada femea.jpg";
import neymara from "../../assets/Neymara, adulta, porte M, castrada e vacinada, 4 anos.jpeg";
import noze from "../../assets/Noze, idoso, porte G 6 anos.jpeg";
import pandora from "../../assets/Pandora Femea, porte M, castrada e vacinada.jpeg";
import pescoco from "../../assets/pescoco macho castrado vacinado 10 anos.jpg";
import preto from "../../assets/Preto, adulto, porte G, castrado e vacinado.jpeg";
import shakira from "../../assets/Shakira, 10 anos, vacinada, castrada.jpg";
import thor from "../../assets/thor macho 10 anos vacinado castrado.jpg";
import urso from "../../assets/Urso, porte G, castrado, vacinado, adulto 6 anos.jpeg";
import vovo from "../../assets/Vovo, castrado, vacinado, porte G, 12 anos.jpeg";
import ozzy from "../../assets/Ozzy, vacinado 1 ano macho.jpg";
import React, { useState } from "react";
import { FaMars, FaVenus } from "react-icons/fa";
import { Dog, Search, Filter, Heart, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const vacinada = "Vacinada e Castrada";
const vacinado = "Vacinado e Castrado";
const femea = "femea";
const macho = "macho";

const animais = [
  {
    id: 1,
    name: "Amora",
    image: amora,
    idade: "13 anos",
    description: vacinada,
    genero: femea,
  },
  {
    id: 2,
    name: "Angel",
    image: angel,
    idade: "",
    description: "Adulta e Castrada",
    genero: femea,
  },
  {
    id: 3,
    name: "Chow",
    image: chow,
    idade: "7 anos",
    description: vacinado,
    genero: macho,
  },
  {
    id: 4,
    name: "Estefan",
    image: estefan,
    idade: "14 anos",
    description: vacinado,
    genero: macho,
  },
  {
    id: 5,
    name: "Guga",
    image: guga,
    idade: "8 anos",
    description: "Porte G, Vacinado e Castrado",
    genero: macho,
  },
  {
    id: 6,
    name: "Guinho",
    image: guinho,
    idade: "13 anos",
    description: vacinado,
    genero: macho,
  },
  {
    id: 7,
    name: "Guria",
    image: guria,
    idade: "12 anos",
    description: "Resgatada do Rio Grande do Sul",
    genero: femea,
  },
  {
    id: 8,
    name: "Homenzinho",
    image: homenzinho,
    idade: "4 anos",
    description: vacinado,
    genero: macho,
  },
  {
    id: 9,
    name: "Horacio",
    image: horacio,
    idade: "4 anos",
    description: vacinado,
    genero: macho,
  },
  {
    id: 10,
    name: "Jack",
    image: jack,
    idade: "3 anos",
    description: vacinado,
    genero: macho,
  },
  {
    id: 11,
    name: "Julie",
    image: julie,
    idade: "3 anos",
    description: vacinada,
    genero: femea,
  },
  {
    id: 12,
    name: "Laikito",
    image: laikito,
    idade: "2 anos",
    description: vacinado,
    genero: macho,
  },
  {
    id: 13,
    name: "Lua",
    image: lua,
    idade: "4 anos",
    description: vacinada,
    genero: femea,
  },
  {
    id: 15,
    name: "Maezinha",
    image: maezinha,
    idade: "4 anos",
    description: vacinada,
    genero: femea,
  },
  {
    id: 16,
    name: "Neymara",
    image: neymara,
    idade: "4 anos",
    description: "Porte M, Vacinada e Castrada",
    genero: femea,
  },
  {
    id: 17,
    name: "Noze",
    image: noze,
    idade: "6 anos",
    description: "Porte G",
    genero: macho,
  },
  {
    id: 18,
    name: "Ozzy",
    image: ozzy,
    idade: "1 ano",
    description: "Vacinado",
    genero: macho,
  },
  {
    id: 19,
    name: "Pandora",
    image: pandora,
    idade: "",
    description: "Porte M, Vacinada e Castrada",
    genero: femea,
  },
  {
    id: 20,
    name: "Pescoço",
    image: pescoco,
    idade: "10 anos",
    description: vacinado,
    genero: macho,
  },
  {
    id: 21,
    name: "Preto",
    image: preto,
    idade: "",
    description: "Porte G, Vacinado e Castrado",
    genero: macho,
  },
  {
    id: 22,
    name: "Shakira",
    image: shakira,
    idade: "10 anos",
    description: vacinada,
    genero: femea,
  },
  {
    id: 23,
    name: "Thor",
    image: thor,
    idade: "10 anos",
    description: vacinado,
    genero: macho,
  },
  {
    id: 24,
    name: "Urso",
    image: urso,
    idade: "6 anos",
    description: vacinado,
    genero: macho,
  },
  {
    id: 25,
    name: "Vovô",
    image: vovo,
    idade: "12 anos",
    description: "Porte G, Vacinado e Castrado",
    genero: macho,
  },
];
function Pets() {
  const [showMacho, setShowMacho] = useState(true);
  const [showFemea, setShowFemea] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [ageFilter, setAgeFilter] = useState("all");
  const [selectedPet, setSelectedPet] = useState(null);

  const filterPets = () => {
    return animais.filter((pet) => {
      const matchesGender =
        (showMacho && pet.genero === macho) ||
        (showFemea && pet.genero === femea);

      const matchesSearch = pet.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesAge =
        ageFilter === "all"
          ? true
          : ageFilter === "young"
          ? parseInt(pet.idade) <= 5
          : ageFilter === "adult"
          ? parseInt(pet.idade) > 5 && parseInt(pet.idade) <= 10
          : parseInt(pet.idade) > 10;

      return matchesGender && matchesSearch && matchesAge;
    });
  };

  return (
    <div className="bg-gradient-to-br from-red-50 to-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-8">
            <h1 className="text-4xl font-extrabold text-red-600 flex items-center justify-center mb-2">
              <Dog className="mr-4 text-red-400" />
              Nossos Pets para Adoção
            </h1>
            <p className="text-gray-600">Encontre seu novo melhor amigo</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Procurar por nome..."
                  className="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-red-300"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="flex justify-center space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-2 rounded-full flex items-center space-x-2 ${
                    showMacho ? "bg-blue-500 text-white" : "bg-gray-200"
                  }`}
                  onClick={() => setShowMacho(!showMacho)}
                >
                  <FaMars />
                  <span>Machos</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-2 rounded-full flex items-center space-x-2 ${
                    showFemea ? "bg-pink-500 text-white" : "bg-gray-200"
                  }`}
                  onClick={() => setShowFemea(!showFemea)}
                >
                  <FaVenus />
                  <span>Fêmeas</span>
                </motion.button>
              </div>

              <div className="flex justify-center items-center space-x-2">
                <Filter className="text-gray-400" />
                <select
                  className="px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-red-300"
                  value={ageFilter}
                  onChange={(e) => setAgeFilter(e.target.value)}
                >
                  <option value="all">Todas as idades</option>
                  <option value="young">Até 5 anos</option>
                  <option value="adult">6 a 10 anos</option>
                  <option value="senior">Mais de 10 anos</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterPets().map((pet) => (
              <motion.div
                key={pet.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative group aspect-w-4 aspect-h-3">
                  <img
                    src={pet.image}
                    alt={pet.name}
                    className="w-full h-full object-cover cursor-pointer"
                    onClick={() => setSelectedPet(pet)}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() => {
                        const subject = encodeURIComponent(
                          `Interesse em adotar ${pet.name}`
                        );
                        const body = encodeURIComponent(
                          `Olá, gostaria de saber mais informações sobre o pet ${pet.name}.`
                        );
                        window.location.href = `mailto:patinhasunidassc@gmail.com?subject=${subject}&body=${body}`;
                      }}
                      className="bg-red-500 text-white px-6 py-2 rounded-full flex items-center space-x-2 hover:bg-red-600 transition-colors"
                    >
                      <Heart className="w-5 h-5" />
                      <span>Quero Adotar</span>
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {pet.name}
                  </h2>
                  <div className="space-y-2">
                    <p className="text-gray-600">
                      <span className="font-semibold">Idade:</span>{" "}
                      {pet.idade || "Não informada"}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-semibold">Características:</span>{" "}
                      {pet.description}
                    </p>
                    <div className="flex items-center mt-2">
                      {pet.genero === "macho" ? (
                        <FaMars className="text-blue-500 w-5 h-5" />
                      ) : (
                        <FaVenus className="text-pink-500 w-5 h-5" />
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedPet && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedPet(null)}
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
                onClick={() => setSelectedPet(null)}
              >
                <X className="w-6 h-6" />
              </motion.button>
              <div className="flex flex-col h-full">
                <div className="relative flex-1 min-h-0">
                  <img
                    src={selectedPet.image}
                    alt={selectedPet.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="bg-white p-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {selectedPet.name}
                  </h3>
                  <p className="text-gray-600 mt-2">
                    {selectedPet.idade && (
                      <span>Idade: {selectedPet.idade} • </span>
                    )}
                    {selectedPet.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Pets;
