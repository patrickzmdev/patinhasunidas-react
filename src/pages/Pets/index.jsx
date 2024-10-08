import PetsList from "./petlist";
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
import luna from "../../assets/Luna, 1 ano, castrada, vacinada, fêmea.jpg";
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
import React, { useState } from 'react';
import { FaMars, FaVenus } from 'react-icons/fa';

const vacinada = "Vacinada e Castrada";
const vacinado = "Vacinado e Castrado";
const femea = "femea";
const macho = "macho";



const animais = [
  { id:1, name:"Amora", image: amora, idade:"13 anos", description:vacinada, genero: femea  },
  { id:2, name:"Angel", image: angel, idade:"", description:"Adulta e Castrada", genero: femea  },
  { id:3, name:"Chow", image: chow, idade:"7 anos", description:vacinado, genero: macho },
  { id:4, name:"Estefan", image: estefan, idade:"14 anos", description:vacinado, genero: macho },
  { id:5, name:"Guga", image: guga, idade:"8 anos", description:"Porte G, Vacinado e Castrado", genero: macho },
  { id:6, name:"Guinho", image: guinho, idade:"13 anos", description:vacinado, genero: macho },
  { id:7, name:"Guria", image: guria, idade:"12 anos", description:"Resgatada do Rio Grande do Sul", genero: femea },
  { id:8, name:"Homenzinho", image: homenzinho, idade:"4 anos", description:vacinado, genero: macho },
  { id:9, name:"Horacio", image: horacio, idade:"4 anos", description:vacinado, genero: macho },
  { id:10, name:"Jack", image: jack, idade:"3 anos", description:vacinado, genero: macho },
  { id:11, name:"Julie", image: julie, idade:"3 anos", description:vacinada, genero: femea },
  { id:12, name:"Laikito", image: laikito, idade:"2 anos", description:vacinado, genero: macho },
  { id:13, name:"Lua", image: lua, idade:"4 anos", description:vacinada, genero: femea },
  { id:14, name:"Luna", image: luna, idade:"1 ano", description:vacinada, genero: femea },
  { id:15, name:"Maezinha", image: maezinha, idade:"4 anos", description:vacinada, genero: femea},
  { id:16, name:"Neymara", image: neymara, idade:"4 anos", description:"Porte M, Vacinada e Castrada", genero: femea },
  { id:17, name:"Noze", image: noze, idade:"6 anos", description:"Porte G", genero: macho },
  { id:18, name:"Ozzy", image: ozzy, idade:"1 ano", description:"Vacinado", genero: macho },
  { id:19, name:"Pandora", image: pandora, idade:"", description:"Porte M, Vacinada e Castrada", genero: femea },
  { id:20, name:"Pescoço", image: pescoco, idade:"10 anos", description:vacinado, genero: macho },
  { id:21, name:"Preto", image: preto, idade:"", description:"Porte G, Vacinado e Castrado", genero: macho },
  { id:22, name:"Shakira", image: shakira, idade:"10 anos", description:vacinada, genero: femea},
  { id:23, name:"Thor", image: thor, idade:"10 anos", description:vacinado, genero: macho},
  { id:24, name:"Urso", image: urso, idade:"6 anos", description:vacinado , genero: macho},
  { id:25, name:"Vovô", image: vovo, idade:"12 anos", description:"Porte G, Vacinado e Castrado", genero: macho },
];
function Pets() {


  const [showMacho, setShowMacho] = useState(true); // Estado para mostrar machos
  const [showFemea, setShowFemea] = useState(true); // Estado para mostrar fêmeas

  const toggleMacho = () => setShowMacho(!showMacho);
  const toggleFemea = () => setShowFemea(!showFemea);

  const filteredPets = animais.filter((pet) => {
    if (showMacho && showFemea) {
      return true; // Mostrar todos se ambos os filtros estiverem ativados
    } else if (showMacho) {
      return pet.genero === femea; // Mostrar apenas machos
    } else if (showFemea) {
      return pet.genero === macho; // Mostrar apenas fêmeas
    }else{
      return true; // Não mostrar nenhum se ambos os filtros estiverem desativados
    }

  });


  return (
   <div className="Pets bg-custom-color overflow-y-auto max-h-screen">
      <h1 className="flex flex-col items-center text-white text-2xl font-playwrite sm:text-3xl p-2">Nossos Pets</h1>
      <div className="flex justify-center space-x-4 p-4">
        <h2 className=" text-white text-2xl font-thin sm:text-2xl p-2">Machos</h2>
        <button className={`text-white px-4 py-2 rounded-md ${showMacho ? 'bg-blue-500' : 'bg-blue-200'}`} onClick={toggleMacho}>
          <FaMars size={24} />
        </button>
        <h2 className="text-white text-2xl font-thin sm:text-2xl p-2">Fêmeas</h2>
        <button className={`text-white px-4 py-2 rounded-md ${showFemea ? 'bg-pink-500' : 'bg-pink-200'}`} onClick={toggleFemea}>
          <FaVenus size={24} />
        </button>
      </div>
      <PetsList pets={filteredPets} />
    </div>
  );
}

export default Pets;
