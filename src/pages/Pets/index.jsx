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
import toquinho from "../../assets/toquinho,macho 1 ano castrado.jpg";
import urso from "../../assets/Urso, porte G, castrado, vacinado, adulto 6 anos.jpeg";
import vovo from "../../assets/Vovo, castrado, vacinado, porte G, 12 anos.jpeg";

const vacinada = "vacinada e castrada";
const vacinado = "vacinado e castrado";



const animais = [
  { id:1, name:"Amora", image: amora, idade:"13 anos", description:vacinada },
  { id:2, name:"Angel", image: angel, idade:"", description:"adulta e castrada" },
  { id:3, name:"Chow", image: chow, idade:"7 anos", description:vacinado },
  { id:4, name:"Estefan", image: estefan, idade:"14 anos", description:vacinado },
  { id:5, name:"Guga", image: guga, idade:"8 anos", description:"porte g, vacinado e castrado" },
  { id:6, name:"Guinho", image: guinho, idade:"13 anos", description:vacinado },
  { id:7, name:"Guria", image: guria, idade:"12 anos", description:"Resgatada do Rio Grande do Sul" },
  { id:8, name:"Homenzinho", image: homenzinho, idade:"4 anos", description:vacinado },
  { id:9, name:"Horacio", image: horacio, idade:"4 anos", description:vacinado },
  { id:10, name:"Jack", image: jack, idade:"3 anos", description:vacinado },
  { id:11, name:"Julie", image: julie, idade:"3 anos", description:vacinada },
  { id:12, name:"Laikito", image: laikito, idade:"2 anos", description:vacinado },
  { id:13, name:"Lua", image: lua, idade:"4 anos", description:vacinada },
  { id:14, name:"Luna", image: luna, idade:"1 ano", description:vacinada },
  { id:15, name:"Maezinha", image: maezinha, idade:"4 anos", description:vacinada},
  { id:16, name:"Neymara", image: neymara, idade:"4 anos", description:"porte m, vacinada e castrada" },
  { id:17, name:"Noze", image: noze, idade:"6 anos", description:"porte g" },
  { id:18, name:"Pandora", image: pandora, idade:"", description:"porte m, vacinada e castrada" },
  { id:19, name:"Pescoço", image: pescoco, idade:"10 anos", description:vacinado },
  { id:20, name:"Preto", image: preto, idade:"", description:"porte g, vacinado e castrado" },
  { id:21, name:"Shakira", image: shakira, idade:"10 anos", description:vacinada},
  { id:22, name:"Thor", image: thor, idade:"10 anos", description:vacinado },
  { id:23, name:"Toquinho", image: toquinho, idade:"1 ano", description:"castrado" },
  { id:24, name:"Urso", image: urso, idade:"6 anos", description:vacinado },
  { id:25, name:"Vovô", image: vovo, idade:"12 anos", description:"porte g, vacinado e castrado" },
];
function Pets() {

  return (
    <>
    <div className="Pets bg-custom-color">
    <h1 className="flex flex-col items-center text-2xl font-semibold sm:text-3xl p-2">Nossos Pets</h1>
      <PetsList pets = {animais} />
    </div>


    </>
  );
}

export default Pets;
