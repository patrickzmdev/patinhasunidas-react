
import React from 'react';
import PetCard from './petcard';

const PetsList = ({ pets }) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {pets.map((pet) => (
          <PetCard
              key={pet.id}
              image={pet.image}
              name={pet.name}
              idade={pet.idade}
              description={pet.description}
          />
      ))}
      </div>
    );
};

export default PetsList;
