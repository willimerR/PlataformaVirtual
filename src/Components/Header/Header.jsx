import { useEffect, useState } from "react";
import Logo from "../../img/logo.png";
import { FaCircleUser } from "react-icons/fa6";
import { MdNotifications } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import "../Header/Notify.css";
import { RiAccountCircleFill } from "react-icons/ri";
import Audios from "../Header/Audio/New-SMS.mp3";
import { PiSignOutFill } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Header = () => {
  const [OpenNotify, SetOpenNottify] = useState(false);
  const [Notify, setNotify] = useState("contentr");
  const [Open, SetOpen] = useState(false);
  const [Open1, SetOpen1] = useState(false);
  const [Nameprofile, Setnameprofile] = useState("");

  useEffect(() => {
    const Datas = async () => {
      try {
        const response = await axios.get("http://localhost:3000/test-db");
        Setnameprofile(response.data[1].Nombre);
      } catch (error) {
        console.log(error);
      }
    };
    Datas();
  }, []);

  const SendData = () => {
    SetOpen(!Open);
  };

  const SendAcount = () => {
    SetOpen1(!Open1);
  };

  const audios = new Audio(Audios);

  const Opennotify = () => {
    SetOpenNottify(!OpenNotify);
    setNotify(!false);
    audios.play();
  };

  return (
    <>
      <header className="sticky w-[100%] px-[20px] py-[40px] h-[50px] z-[1000] flex justify-between items-center bg-green-500 shadow-2xl rounded-2xl">
        {/* <div className=" w-[100px] h-[50px] sm:hidden flex gap-[25px] justify-items-end items-center">
          {/* <div className=" w-[50px] h-[50px] backdrop-blur-sm bg-white/30 flex justify-center items-center">
            <GiHamburgerMenu
              onClick={SendData}
              className="text-xl cursor-pointer text-white"
            />
          </div> 
        </div> */}

        <img
          className="w-[50px] h-[50px] object-cover rounded-[50%]"
          src={Logo}
          alt=""
        />

        {/* <nav className="max-sm:hidden">
          <ul className="flex gap-4  justify-center items-center">
            <li className="inline-block px-[20px] py-[10px] bg-green-300 rounded-2xl hover:bg-green-100 hover:duration-[0.5s] cursor-pointer">
              Inicio
            </li>
            <li className="inline-block px-[20px] py-[10px] bg-green-300 rounded-2xl hover:bg-green-100 hover:duration-[0.5s] cursor-pointer">
              Materias
            </li>
          </ul>
        </nav> */}

        <div
          className={`${Notify}  w-[100px] h-[50px] sm:hidden flex gap-[25px] justify-center items-center`}
        >
          <MdNotifications
            onClick={Opennotify}
            className="text-[25px] cursor-pointer text-white"
          />
        </div>
        <div
          className={`${Notify}  relative w-[100px] h-[50px] max-sm:hidden flex gap-[25px] justify-center items-center`}
        >
          <MdNotifications
            onClick={Opennotify}
            className="text-[25px] cursor-pointer text-white"
          />
        </div>
        <div className=" w-[50px] h-[50px] backdrop-blur-sm bg-white/30 flex justify-center items-center rounded-[50%] ">
          <FaCircleUser
            onClick={SendAcount}
            className="text-xl cursor-pointer text-white "
          />
        </div>
      </header>

      {OpenNotify && (
        <div className="scroll absolute w-[400px] h-[200px]  z-[10] bg-green-300 top-[90px] left-[400px] p-[10px] m-[20px] rounded-xl drop-shadow-2xl  items-center overflow-y-auto max-sm:left-0 max-sm:top-[80px]  max-sm:m-[10px]">
          <h1 className="text-center text-xl text-white">Notificación</h1>

          <div className="relative w-full h-[60px] bg-white p-[10px] top-3 rounded-xl mb-[6px] cursor-pointer ">
            <div className="flex justify-start items-center gap-5">
              <div className=" ">
                <RiAccountCircleFill className=" text-[30px]" />
              </div>
              <div className="">
                <p>Ramon 😎(☞ﾟヮﾟ)☞</p>
              </div>
            </div>
          </div>

          <div className=" relative w-full h-[60px] bg-white p-[10px] top-3 rounded-xl mb-6 cursor-pointer">
            <div className="flex justify-start items-center gap-5">
              <div className=""></div>
              <div className="inline-block">
                <p className="">Usted tiene una tarea disponible</p>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* 
      {Open && (
        // <div onClick={SendData} className=" bg-white/30 ">
        //   <ul className="flex gap-4 h-[200px] w-[50%] flex-col backdrop-blur-[10px] absolute left-[0] p-[16px] mt-[10px] sm:hidden z-[100] bg-green-500 m-3.5 rounded-[20px]">
        //     <li className="inline-block px-[20px] py-[10px] bg-green-300 rounded-2xl hover:bg-green-100 hover:duration-[0.5s] cursor-pointer">
        //       Inicio
        //     </li>
        //     <li className="inline-block px-[20px] py-[10px] bg-green-300 rounded-2xl hover:bg-green-100 hover:duration-[0.5s] cursor-pointer">
        //       Materias
        //     </li>
        //   </ul>
        // </div>
      )} */}

      {Open1 && (
        <div className="box flex justify-center absolute drop-shadow-xl right-[0] m-[10px] z-[100] flex-col gap-5 items-center w-[200px] h-[150px] bg-green-300 rounded-xl ">
          <h1 className=" text-xl">{Nameprofile}</h1>

          <li className="list-none hover:text-black">
            <PiSignOutFill className="relative top-[34px] text-[20px] text-red-500 hover:text-black" />

            <Link
              to={"/"}
              className="inline-block px-[40px] py-[10px] hover:bg-blue-400  hover:duration-[0.5s] hover:text-white"
            >
              Cerrar Sesion
            </Link>
          </li>
        </div>
      )}
    </>
  );
};

export default Header;
