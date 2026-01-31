import React from "react";
import { useState } from "react";
import Students from "../../Students.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header.jsx";

const Login = () => {
  const [Usuaro, setusuario] = useState("");
  const [Password, setpassword] = useState("");
  const [active, setactive] = useState(false);

  const navigate = useNavigate();

  const SendDa = async (e) => {
    e.preventDefault();

    if (Usuaro === "" || Password === "") {
      setactive(true);
    } else {
      setactive(false);
    }
    e.target[0].focus();
    console.log(Response.status);
    try {
      const response = await axios.post("http://localhost:3000/test-db2", {
        usuario: Usuaro,
        contrasena: Password,
      });

      if (response.status === 200) {
        navigate("/Hero");
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <>
      <div className=" flex justify-center items-center h-[350px] bg-emerald-300 shadow-2xl rounded-[20px]">
        <div className=" relative flex justify-center items-center w-[400px] top-[200px] flex-col bg-green-200 P-[10px] rounded-xl p-5 shadow-2x m-[10px]">
          <h1 className="text-[25px]">Bienvenid@s </h1>

          <form className="w-full p-2.5 " onSubmit={SendDa}>
            <div className="mt-5 mb-[20px]">
              <input
                className="w-full h-[40px] pl-[10px] rounded-xl outline-none bg-amber-50"
                type="text"
                placeholder="Indroduce el usuario"
                value={Usuaro}
                onChange={(event) => {
                  setusuario(event.target.value);
                }}
                name="Usuaro"
              />
              <span
                className={`${
                  active ? " flex mt-3 text-[15px] pl-3 text-red-600" : "hidden"
                }`}
              >
                El usuario debe estar completado
              </span>
            </div>
            <div className="mb-[30px]">
              <input
                type="password"
                className="w-full h-[40px] pl-[10px] rounded-xl outline-none bg-amber-50"
                placeholder="Indroduce la contraseña"
                value={Password}
                onChange={(event) => {
                  setpassword(event.target.value);
                }}
                name="Password"
              />
              <span
                className={`${
                  active ? " flex mt-3 text-[15px] pl-3 text-red-600" : "hidden"
                }`}
              >
                La contraseña debe estar completado
              </span>
            </div>
            <div className=" flex justify-center items-center">
              <button
                className="inline-block px-[30px] py-3  bg-blue-400 outline-none duration-500 hover:bg-green-500 hover:text-white cursor-pointer"
                onClick={SendDa}
              >
                {" "}
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
