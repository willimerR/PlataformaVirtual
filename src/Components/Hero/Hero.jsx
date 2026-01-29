// components/DashboardContent.jsx

import {
  UserGroupIcon,
  BuildingOffice2Icon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";
import CalificacionesSection from "../Qualifications/Qualification";
import MateriasSection from "../Matters/Matter";
import Header from "../Header/Header";

const Card = ({ title, value, icon: Icon, color }) => (
  <div
    className={`p-6 rounded-xl shadow-lg  border-l-4 border-green-400 transition-shadow hover:shadow-xl bg-white`}
  >
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {title}
        </p>
        <p className="text-3xl font-bold text-gray-900 dark:text-white mt-1">
          {value}
        </p>
      </div>
      <Icon className={`h-8 w-8 text-${color}-500 opacity-60`} />
    </div>
  </div>
);

const DashboardContent = () => {
  const cardsData = [
    {
      title: "Estudiantes Totales",
      value: "661",
      icon: UserGroupIcon,
      color: "indigo",
    },
    {
      title: "Materias Activas",
      value: "10",
      icon: BuildingOffice2Icon,
      color: "emerald",
    },
    {
      title: "Promedio General",
      value: "8.7",
      icon: CheckCircleIcon,
      color: "amber",
    },
    {
      title: "Asistencia",
      value: "Presente",
      icon: CheckCircleIcon,
      color: "amber",
    },
  ];

  return (
    <>
      <Header />
      <seccion>
        {/* Tarjetas de Resumen */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 px-5 mt-8">
          {cardsData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>

        <CalificacionesSection />

        <MateriasSection />
      </seccion>
    </>
  );
};

export default DashboardContent;
