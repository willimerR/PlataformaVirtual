// components/CalificacionesSection.jsx
import React from "react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const CalificacionesSection = () => {
  const data = {
    labels: [
      "Matemáticas",
      "Sociales",
      "Naturales",
      "Lengua española",
      "Civica",
      " Fisica",
    ],
    datasets: [
      {
        label: "El promedio es de",
        data: [6.8, 6.2, 7.5, 9.5, 8.2, 7.1],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  // Datos de ejemplo para la tabla de alertas
  const lowPerformanceAlerts = [
    { id: 1, grade: 7.1, subject: "Física" },
    { id: 2, grade: 6.8, subject: "Matemáticas" },
    //   // ... más datos
  ];

  return (
    <section className="m-5 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 border-b pb-2">
        📊 Rendimiento Académico y Alertas
      </h2>

      {/* Espacio para Gráfico de Rendimiento General (e.g., usando Recharts) */}
      <div className="h-64 mb-8 bg-gray-50 dark:bg-gray-700 rounded-lg flex items-center justify-center">
        {<Doughnut data={data} />}
      </div>

      {/* Tabla de Alertas de Bajo Rendimiento */}
      <h3 className="text-xl font-medium text-red-600 dark:text-red-400 flex items-center mb-3">
        <ExclamationTriangleIcon className="h-5 w-5 mr-2" /> Alertas de Bajo
        Rendimiento
      </h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Materia
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Promedio
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {lowPerformanceAlerts.map((alert) => (
              <tr
                key={alert.id}
                className="hover:bg-red-50 dark:hover:bg-gray-700 transition duration-150"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                  {alert.subject}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-red-600 dark:text-red-400">
                  {alert.grade}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default CalificacionesSection;
