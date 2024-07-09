import "../Events/styles.css";
import fotoContainer from "../../assets/papel-de-parede-patinhas.jpg";
import fotoLogo from "../../assets/logoNavbar.png";

function Historia() {
  return(
    <>
    <div class="p-4 mx-auto sm:p-10 md:p-16 bg-custom-color2 ">
			<div class="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
			<img src={fotoLogo} alt="foto" class="w-auto h-auto "/>
				<div class="p-6 pb-12 m-4 mx-auto mt-10 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-white">
					<div className="container-texto overflow-y-auto h-full md:max-h-full">
            <img
              src={fotoContainer}
              alt="foto-container"
              className="img-container h-full w-full overflow-hidden"
            />
					<div class="space-y-2">
						<li rel="noopener noreferrer"  class="inline-block text-2xl font-playwrite sm:text-3xl m-9" _msttexthash="1638520" _msthash="207">Nossa História</li>
							<p class="text-xs dark:text-gray-600" _msttexthash="285766" _msthash="208">por
						<a rel="noopener noreferrer" href="." class="text-xs hover:underline" _istranslated="1">Patinhas Unidas</a>
							</p>
					</div>
					<div class="text-zinc-950 text-1xl font-serif m-2">
							<p _msttexthash="1006226" _msthash="209"> &nbsp;&nbsp;&nbsp;&nbsp;
                Ao longo dos 5 anos do Instituto
                Patinhas Unidas SC, já foi possível resgatar e acolher mais de
                duzentos de animais, tratando-os de suas feridas físicas e
                psicológicas, com o apoio de toda uma equipe técnica: com médica
                veterinária, adestrador e voluntários, que se doam intensamente
                em prol da causa animal, reabilitando estes animais e dando-lhes
                condições de serem adotados novamente por famílias criteriosamente
                escolhidas e monitoradas pelo instituto, garantindo que estes
                animais não retornem às ruas novamente.</p>
							<br/>
							<p _msttexthash="1006226" _msthash="209">&nbsp;&nbsp;&nbsp;&nbsp;Somos
                um instituto sem fins lucrativos, e
                além de nosso trabalho voluntário, mantemos tudo através de
                doações. Frequentemente realizamos eventos como bazares solidários
                ou rifas para angariar fundos a fim de continuarmos desenvolvendo
                este trabalho, dando a chance de um lar para inúmeros animais em
                condições de abandono, expostos ao frio, fome, sede e a maldade
                humana nas ruas.</p>
							<br/>
							<p _msttexthash="1006226" _msthash="209">&nbsp;&nbsp;&nbsp;&nbsp;
                Somente no ano de 2023 foram realizadas,
                por meio do Instituto 44 adoções, 42 animais resgatados, 119
                vacinas aplicadas e 53 castrações.</p>
							<br/>


					</div>
					</div>
			</div>
		</div>
	 </div>


</>

  );
}

export default Historia;
