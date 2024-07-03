import fotoEvento from "../../assets/evento1.jpg";
import fotoEvento2 from "../../assets/evento2.jpg";
import fotoEvento3 from "../../assets/evento3.jpg";
import fotoEvento4 from "../../assets/evento4.jpg";
import fotoEvento5 from "../../assets/evento5.jpg";
import "./styles.css";
import fotoContainer from "../../assets/papel-de-parede-patinhas.jpg";

function Events() {
  return(
    <>
    <div class="p-5 mx-auto sm:p-10 md:p-16 bg-custom-color dark:text-gray-800">
			<div class="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
			<img src={fotoEvento} alt="foto" class="w-full h-full overflow-hidden object-cover  sm:h-96 "/>
				<div class="p-6 pb-12 m-4 mx-auto mt-10 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-white">
					<div className="container-texto overflow-y-auto h-full md:max-h-full">
            <img
              src={fotoContainer}
              alt="foto-container"
              className="img-container h-full w-full"
            />
					<div class="space-y-2">
						<a rel="noopener noreferrer" href="." class="inline-block text-2xl font-semibold sm:text-3xl m-9" _msttexthash="1638520" _msthash="207">Primeiro Evento Audotei</a>
							<p class="text-xs dark:text-gray-600" _msttexthash="285766" _msthash="208">por
						<a rel="noopener noreferrer" href="." class="text-xs hover:underline" _istranslated="1">Patinhas Unidas</a>
							</p>
					</div>
					<div class="dark:text-gray-800">
							<p _msttexthash="1006226" _msthash="209">O primeiro Audotei do Instituto Patinhas Unidas SC, realizado em fevereiro de 2024, foi um momento de grande celebração para a comunidade canina. Contamos com a presença de mais de 40 cães e seus tutores no local, com ajuda de voluntários também foi possível realizar uma feirinha de adoção, onde os cães resgatados procuravam por novos lares.</p>
							<br/>
							<p _msttexthash="1006226" _msthash="209">Durante o evento, foram distribuídos petiscos, brindes e picolés pet para que os cães e, ao mesmo tempo, arrecadamos recursos para a causa animal. Além disso, foi realizada uma arrecadação de rações para os cães desamparados, bem como um bazar solidário que ofereceu opções para os participantes.</p>
							<br/>
							<p _msttexthash="1006226" _msthash="209">O evento também contou com a presença de experientes adestrador e veterinárias que ministraram palestras e expuseram seus conhecimentos para os interessados. Foi um dia recheado de emoção e esperança, pois pudemos rever vários cães que receberam o amor e a proteção do Instituto Patinhas Unidas SC, inclusive de cidades distantes.</p>
							<br/>
							<p _msttexthash="1006226" _msthash="209">Esse evento foi um sucesso absoluto, demonstrando que a união pode fazer uma grande diferença na vida dos nossos amigos caninos.</p>


					</div>
					</div>
			</div>
		</div>
	 </div>

<div class="py-6 bg-custom-color">
	<div class="container flex flex-col justify-center p-4 mx-auto">
		<div class="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
			<img class="object-cover w-full dark:bg-gray-500 aspect-square" src={fotoEvento2} alt="image1"/>
			<img class="object-cover w-full dark:bg-gray-500 aspect-square" src={fotoEvento3} alt="image2"/>
			<img class="object-cover w-full dark:bg-gray-500 aspect-square" src={fotoEvento4} alt="image3"/>
			<img class="object-cover w-full dark:bg-gray-500 aspect-square" src={fotoEvento5} alt="image4"/>
		</div>
	</div>
</div>

</>

  );
}

export default Events;
