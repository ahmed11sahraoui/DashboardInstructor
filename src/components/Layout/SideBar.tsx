// SideBar.js
import React from 'react';

export default function SideBar({ onExerciceClick }) {
  return (
    <div className="bg-gray-200 h-screen w-64 py-6 px-4">
      <ul>
        <li className="text-xl font-semibold mb-4">
          <a className="cursor-pointer" onClick={onExerciceClick}>
            Exercices
          </a>
        </li>
      </ul>
    </div>
  );
}
