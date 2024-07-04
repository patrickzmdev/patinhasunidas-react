import "../Events/styles.css";

const PetCard = ({ image, name, idade, description }) => {
  return (
    <div className="flex justify-center items-center h-auto">


    <div className="max-w-xs  border-4  border-neutral-800   rounded-md mb-2 shadow-md bg-custom-color2  dark:text-gray-900">
      <img src={image} alt={name} className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
      <div className="mt-6 mb-2">
          <span className="block text-xs font-medium tracking-widest uppercase">Nome do Pet:</span>
          <h2 className="text-xl p-1 font-semibold tracking-wide">{name}</h2>
      </div>
      <p className="dark:text-gray-800 p-1">{idade}</p>
    <p className="dark:text-gray-800 p-1">{description}</p>
    <button type="button" className="px-6 py-2 p-10 font-semibold rounded-full bg-custom-color dark:bg-gray-800 ">Adotar</button>
    </div>
    </div>
  );
};

export default PetCard;
