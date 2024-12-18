import React from 'react';
import PlanetStatus from './PlanetStatus';

function PlanetStats() {
  const planets = [
    {
      name: 'Mars',
      traits: [
        { label: 'Strength', value: 80, maxValue: 100 },
        { label: 'Agility', value: 60, maxValue: 100 },
        { label: 'Intelligence', value: 40, maxValue: 100 },
      ],
    },
    {
      name: 'Jupiter',
      traits: [
        { label: 'Wisdom', value: 90, maxValue: 100 },
        { label: 'Leadership', value: 70, maxValue: 100 },
        { label: 'Endurance', value: 85, maxValue: 100 },
      ],
    },
    {
      name: 'Saturn',
      traits: [
        { label: 'Discipline', value: 75, maxValue: 100 },
        { label: 'Patience', value: 95, maxValue: 100 },
        { label: 'Strategic Thinking', value: 65, maxValue: 100 },
      ],
    },
    {
      name: 'Venus',
      traits: [
        { label: 'Charm', value: 85, maxValue: 100 },
        { label: 'Empathy', value: 90, maxValue: 100 },
        { label: 'Creativity', value: 70, maxValue: 100 },
      ],
    },
  ];

  return (
    <div className="bg-main-black text-white min-h-screen p-6">
      {planets.map((planet, index) => (
        <PlanetStatus
          key={index}
          planetName={planet.name}
          traits={planet.traits}
        />
      ))}
    </div>
  );
}

export default PlanetStats;
