import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const {setShowSearch, getCartCount} = useContext(ShopContext);

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/">
        <img src={assets.logo} className="w-56 sm:w-48 cursor-pointer" alt="" />
      </Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1 cursor-pointer">
          <p>INICIO</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/colecao" className="flex flex-col items-center gap-1 cursor-pointer">
          <p>COLECÃO</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/sobre" className="flex flex-col items-center gap-1 cursor-pointer">
          <p>SOBRE</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/contato" className="flex flex-col items-center gap-1 cursor-pointer">
          <p>CONTATO</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className="w-5 cursor-pointer" alt="" />

        <div className="group relative">
          <Link to='/login'><img
            className="w-5 cursor-pointer"
            src={assets.profile_icon}
            alt=""
          /></Link>

          <div className="group-hover:block hidden absolute dropdown-manu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black ">Meu Perfil</p>
              <p className="cursor-pointer hover:text-black ">Pedidos</p>
              <p className="cursor-pointer hover:text-black ">Sair</p>
            </div>
          </div>
        </div>

        <Link to="/carrinho" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5 cursor-pointer" alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">{getCartCount()}</p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt=""
        />
      </div>

      {/*Sidebar manu for small screens */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-auto max-h-screen bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
            <p>Voltar</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 px-6 border cursor-pointer"
            to="/"
          >
            INICIO
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 px-6 border cursor-pointer"
            to="/colecao"
          >
            COLEÇÃO
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 px-6 border cursor-pointer"
            to="/sobre"
          >
            SOBRE
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 px-6 border cursor-pointer"
            to="/contato"
          >
            CONTATO
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
