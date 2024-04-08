// Home.js
import React, { useState } from 'react';
import NavBar from '@/components/Layout/NavBar';
import SideBar from '@/components/Layout/SideBar';
import ExerciceGetAll from '@/components/Shared/Exercice/exerciceGetAll';
import ExercicePostCreate from '@/components/Shared/Exercice/exercicePostCreate';

export default function Home() {
  const [showExercice, setShowExercice] = useState(false);

  const toggleExercice = () => {
    setShowExercice(!showExercice);
  };

  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <ExercicePostCreate />
      <div className="flex flex-1">
        <SideBar onExerciceClick={toggleExercice} />
        <div className="flex flex-grow justify-center items-center">
          {showExercice && <ExerciceGetAll />}
        </div>
      </div>
    </div>
  );
}
