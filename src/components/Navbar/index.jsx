import React from "react";
import Logo from "../../assets/logoNavbar.png";
import "./styles.css";
import { Link } from 'react-router-dom';
import { useState } from "react";
import { Menu, Button} from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';


function Navigation() {
  const [visible, setVisible] = useState(false);

  const handleMenuClick = () => {
    setVisible(!visible);
  };

  const handleMenuItemClick = () => {
    setVisible(false);
  };

  return (
    <>
      <header className="w-full p-4 bg-custom-navbar">
        <div className="container flex justify-between bg-custom-navbar2 rounded-full h-16 mx-auto md:justify-center md:space-x-8">
          <ul className="items-stretch hidden space-x-3 md:flex">
            <li className="flex">
              <Link to="/"
                className="flex items-center text-white font-playwrite px-4 -mb-1 border-b-2 border-white"
                _msttexthash="44616"
                _msthash="170">
                  Página Inicial</Link>

            </li>
            <li className="flex">
              <Link to= "/history"
                className="flex items-center text-white font-playwrite px-4 -mb-1 border-b-2 border-white"
                _msttexthash="44616"
                _msthash="171">

                O Instituto
              </Link>
            </li>
            <li className="flex">
              <Link to="/events"
                className="flex items-center text-white font-playwrite px-4 -mb-1 border-b-2 border-white"
                _msttexthash="44616"
                _msthash="172">
                Eventos</Link>

            </li>
          </ul>
          <Link to="/">
            <img src={Logo} alt="Logo" className="h-20 w-auto"/>
            </Link>

          <ul className="items-stretch hidden space-x-3 md:flex">
            <li className="flex">
             <Link to="/ajudar"
                className="flex items-center text-white font-playwrite px-4 -mb-1 border-b-2 border-white"
                _msttexthash="44616"
                _msthash="174">

                Como Ajudar
                </Link>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="https://patinhasunidassc.petlove.com.br/"
                target="_blank"
                className="flex items-center text-white font-playwrite px-4 -mb-1 border-b-2 border-white"
                _msttexthash="44616"
                _msthash="175"
              >
                Nossa Lojinha
              </a>
            </li>
            <li className="flex">
            <Link to="/pets"
                className="flex items-center text-white font-playwrite px-4 -mb-1 border-b-2 border-white"
                _msttexthash="44616"
                _msthash="172">
                Pets</Link>

            </li>


          </ul>
          <button title="Button" onClick={handleMenuClick} type="button" className="p-2 md:hidden text-white rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>

        <div className={`fixed top-0 right-0 z-40 p-5 bg-custom-navbar2 opacity-90 shadow-lg transition-transform transform ${visible ? 'translate-x-0' : 'translate-x-full'}`}>
                <Button
                    onClick={handleMenuClick}
                    className="absolute top-0 right-0"
                    icon={<CloseOutlined />}
                />
               <Menu mode="vertical" className="bg-white border-4 rounded-md">
                            <Menu.Item key="1" onClick={handleMenuItemClick}>
                                <Link to="/" ><li className="font-playwrite">Pagina Inicial</li></Link>
                            </Menu.Item>
                            <Menu.Item key="2" onClick={handleMenuItemClick}>
                                <Link to="/history" ><li className="font-playwrite">O Instituto</li></Link>
                            </Menu.Item>
                            <Menu.Item key="3" onClick={handleMenuItemClick}>
                                <Link to="/events"><li className="font-playwrite">Eventos</li></Link>
                            </Menu.Item>
                            <Menu.Item key="4" onClick={handleMenuItemClick}>
                                <Link to="/ajudar"><li className="font-playwrite">Como Ajudar</li></Link>
                            </Menu.Item>
                            <Menu.Item key="5" onClick={handleMenuItemClick}>
                                <a  rel="noopener noreferrer"
                                    href="https://patinhasunidassc.petlove.com.br/"
                                    target="_blank"
                                    _msttexthash="44616"
                                    _msthash="175"
                                    ><li className="font-playwrite">Nossa Lojinha</li></a>
                            </Menu.Item>
                            <Menu.Item key="6" onClick={handleMenuItemClick}>
                                <Link to="/pets"><li className="font-playwrite">Pets</li></Link>
                            </Menu.Item>
                        </Menu>
        </div>



        </div>
      </header>
    </>
  );
}

export default Navigation;
