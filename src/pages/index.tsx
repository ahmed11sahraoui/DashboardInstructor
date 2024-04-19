// Home.js
import React, { useState } from 'react';
import SideBar from '@/components/Layout/SideBar';
import ExerciceGetAll from '@/components/Shared/Exercice/exerciceGetAll';
import dynamic from "next/dynamic";
const AdminApp = dynamic(() => import("../components/AdminApp"), {
    ssr: false,
});

export default function Home() {
  const [showExercice, setShowExercice] = useState(false);

  const toggleExercice = () => {
    setShowExercice(!showExercice);
  };

  return (
    <div className="flex flex-col h-screen">


        <AdminApp />
      <div className="flex flex-1">
        <SideBar onExerciceClick={toggleExercice} />
        <div className="flex flex-grow justify-center items-center">
          {showExercice && <ExerciceGetAll />}
        </div>
      </div>
    </div>
  );
}
