import "./styles.css";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import foto1 from "../../assets/fotomenu1.png";
import foto2 from "../../assets/fotomenu2.jpg";
import foto3 from "../../assets/fotomenu4.png";
import fotoMenu from "../../assets/imgtextcontainer.jpg"
import fotoContainer from "../../assets/papel-de-parede-patinhas.jpg"
import React, { useState, useEffect } from 'react';


function HomePage() {
  const [autoPlay, setAutoPlay] = useState(true); // Estado para controlar o autoplay
  const [slideIndex, setSlideIndex] = useState(0); // Estado para controlar o índice do slide atual



  const autoPlayDelay = 4000; // Delay de 3 segundos entre os slides

  // Função para parar o autoplay quando o mouse passar sobre o carrossel
  const handleMouseEnter = () => {
    setAutoPlay(false);
  };

  // Função para retomar o autoplay quando o mouse sair do carrossel
  const handleMouseLeave = () => {
    setAutoPlay(true);
  };

  // Função para avançar para o próximo slide
  const nextSlide = () => {
    const nextIndex = (slideIndex + 1) % 4; // 4 é o número total de slides
    setSlideIndex(nextIndex);
  };

  // Efeito para controlar o autoplay com intervalos
  useEffect(() => {
    let interval;

    if (autoPlay) {
      interval = setInterval(() => {
        nextSlide();
      }, autoPlayDelay);
    }

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, [autoPlay, autoPlayDelay, slideIndex]); // Dependências do useEffect: autoPlay e autoPlayDelay

  return (
    <>
    <div className="fundo-carrosel">
    <div className="container-slide">
    <Carousel
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      autoPlay={autoPlay} // Definindo o autoPlay diretamente aqui
      interval={autoPlayDelay} // Definindo o intervalo de autoplay
      selectedItem={slideIndex} // Seleciona o item atual do carrossel
      showThumbs={false}
      showStatus={false}
    >

      <div className="slide">
        <img src={foto1} alt="Slide 1" />
      </div>
      <div className="slide">
        <img src={foto2} alt="Slide 2" />
      </div>
      <div className="slide">
        <img src={foto3} alt="Slide 3" />
      </div>


    </Carousel>
    </div>
    </div>
    <div className="fundo">
    <div class="p-1 mx-auto sm:p-10 md:p-16 ">
	  <div class="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
		<img src={fotoMenu} alt="foto-menu" class="w-full h-auto sm:h-64 object-cover md:h-8 xl:h-auto border-2 border-cyan-950 "/>
		<div class="p-6 pb-12 m-4 mx-auto mt-10 space-y-6 bg-white lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md ">
			<div class="space-y-2 mt-20 bg-white" >
				<a rel="noopener noreferrer" href="." class="inline-block font-sans text-3xl from-indigo-950 sm:text-3xl" _msttexthash="1638520" _msthash="415">A IMPORTÂNCIA DE ADOTAR UM ANIMAL ABANDONADO</a>

			</div>
      <div className="container-texto bg-white">
      <img src={fotoContainer} alt="foto-container" className="img-container"/>
			<div class="text-zinc-950 text-1xl font-serif m-2">
				<p _msttexthash="1006226" _msthash="417" from-neutral-800>&nbsp;&nbsp;&nbsp;&nbsp;De acordo com o Instituto Brasileiro de Geografia e Estatística (IBGE), 44,13% dos lares brasileiros possui ao menos um cão em casa. Isto significa dizer que a população de cachorros nas casas do Brasil chega a 52,2 milhões. Contudo, ainda existem mais de 20 milhões de cães abandonados pelas ruas, nas cidades brasileiras, como mostra a Organização Mundial de Saúde (OMS).</p>
        </div>
      <br/>
      <div class="text-zinc-950 text-1xl font-serif m-2">
        <p _msttexthash="1006226" _msthash="417" from-neutral-800>&nbsp;&nbsp;&nbsp;&nbsp;Estes animais, abandonados nas ruas, tornam-se alvos de maus-tratos constantes. Muitos acabam ficando doentes pela falta de comida ou morrem devido a atropelamentos. No entanto, a sociedade pode mudar esta realidade e passar a ver a adoção como uma alternativa viável. Para quem ainda tem dúvida sobre este assunto, vamos destacar algumas razões que podem estimular este ato de amor, que é a adoção de animais carentes.</p>
			</div>
      </div>
		</div>
	</div>
  </div>

</div>





    </>
  );
}

export default HomePage;
