// components/MateriasSection.jsx
import React from "react";
import { UsersIcon, CheckBadgeIcon } from "@heroicons/react/24/solid";

const ProgressBar = ({ progress = "50%", color = "red" }) => (
  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
    <div
      className={`h-2.5 rounded-full bg-${color}-600`}
      style={{ width: `${progress}%` }}
    ></div>
  </div>
);

const MateriasSection = () => {
  // Datos de ejemplo para las materias
  const subjectsData = [
    {
      name: "Matemáticas",
      teacher: "Prof. García",
      students: 30,
      progress: 75,
      color: "blue",
    },
    {
      name: "Historia Mundial",
      teacher: "Prof. López",
      students: 20,
      progress: 60,
      color: "yellow",
    },
    {
      name: "Inglés Avanzado",
      teacher: "Prof. Smith",
      students: 32,
      progress: 90,
      color: "emerald",
    },
    // ... más datos
  ];

  return (
    <section className="m-5 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 border-b pb-2">
        📚 Gestión y Progreso de Materias
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjectsData.map((subject, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg dark:border-gray-700 hover:shadow-md transition"
          >
            <h3 className="text-xl font-medium text-indigo-600 dark:text-indigo-400">
              {subject.name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
              <span className="font-semibold">{subject.teacher}</span>
            </p>

            <div className="flex justify-between items-center mb-1">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Progreso de la entrega:
              </p>
              <span className={`text-sm font-bold text-${subject.color}-600`}>
                {subject.progress}%
              </span>
            </div>
            <ProgressBar progress={subject.progress} color={subject.color} />

            <div className="flex items-center mt-3 text-sm text-gray-600 dark:text-gray-400">
              <UsersIcon className="h-4 w-4 mr-1 text-gray-500" />
              {subject.students} Estudiantes Inscritos
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MateriasSection;
