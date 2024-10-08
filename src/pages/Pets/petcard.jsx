import "../Events/styles.css";
import { useState } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const PetCard = ({ image, name, idade, description }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAdoptClick = () => {
    const subject = encodeURIComponent(`Quero Adotar ${name}`);
    const body = encodeURIComponent(`Olá, estou interessado em adotar o pet ${name}. Por favor, envie mais informações.`);
    const mailtoLink = `mailto:patinhasunidassc@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };
  return (
    <div className="flex justify-center items-center h-auto ">


    <div className="max-w-xs  border-4  border-white  rounded-md mb-2 shadow-md bg-custom-color2   ">
      <LazyLoadImage src={image} alt={name} effect="blur" className="object-cover cursor-pointer object-center w-full rounded-md h-72 " onClick={handleImageClick} />
      <div className="m-2 flex flex-col justify-center items-center">
          <span className="block text-xs text-white  font-medium tracking-widest uppercase">Nome do Pet:</span>
          <h2 className="text-xl p-1 text-white font-semibold tracking-wide">{name}</h2>

          <p className="text-white p-1">{idade}</p>
          <p className="text-white p-1">{description}</p>

    <button type="button" className="px-6 py-2 p-10 font-semibold text-white rounded-full bg-custom-color  " onClick={handleAdoptClick}>Adotar</button>
    </div>
    </div>

    {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-0 right-0 mt-4 mr-4 text-white text-2xl"
            >
              &times;
            </button>
            <img
              src={image}
              alt={name}
              className="object-cover object-center rounded-md max-w-full max-h-screen "
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PetCard;
