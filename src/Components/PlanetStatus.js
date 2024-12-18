import React from 'react';
import StatusBar from './StatusBar';

function PlanetStatus({ planetName, traits }) {
  return (
    <div className="p-4 mb-8">
      <h2 className="text-2xl font-header text-white mb-4">{planetName}</h2>
      {traits.map((trait, index) => (
        <StatusBar
          key={index}
          label={trait.label}
          value={trait.value}
          maxValue={trait.maxValue}
        />
      ))}
    </div>
  );
}

export default PlanetStatus;