import React from "react";
import Logo from "../../assets/logofinal.png";
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
      <header className="w-full p-4 bg-custom-color text-dark">
        <div className="container flex justify-between h-16 mx-auto md:justify-center md:space-x-8">
          <ul className="items-stretch hidden space-x-3 md:flex">
            <li className="flex">
              <Link to="/"
                className="flex items-center px-4 -mb-1 border-b-2 border-black"
                _msttexthash="44616"
                _msthash="170">
                  Página Inicial</Link>

            </li>
            <li className="flex">
              <Link to= "/history"
                className="flex items-center px-4 -mb-1 border-b-2 border-black"
                _msttexthash="44616"
                _msthash="171">

                Nossa História
              </Link>
            </li>
            <li className="flex">
              <Link to="/events"
                className="flex items-center px-4 -mb-1 border-b-2 border-black"
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
                className="flex items-center px-4 -mb-1 border-b-2 border-black"
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
                className="flex items-center px-4 -mb-1 border-b-2 border-black"
                _msttexthash="44616"
                _msthash="175"
              >
                Nossa Lojinha
              </a>
            </li>
            <li className="flex">
            <Link to="/pets"
                className="flex items-center px-4 -mb-1 border-b-2 border-black"
                _msttexthash="44616"
                _msthash="172">
                Pets</Link>

            </li>


          </ul>
          <button title="Button" onClick={handleMenuClick} type="button" className="p-2 md:hidden rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 dark:text-gray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>

        <div className={`fixed top-0 right-0 z-40 p-5 bg-custom-color opacity-90 shadow-lg transition-transform transform ${visible ? 'translate-x-0' : 'translate-x-full'}`}>
                <Button
                    onClick={handleMenuClick}
                    className="absolute top-0 right-0"
                    icon={<CloseOutlined />}
                />
               <Menu mode="vertical" className="bg-custom-color">
                            <Menu.Item key="1" onClick={handleMenuItemClick}>
                                <Link to="/">Pagina Inicial</Link>
                            </Menu.Item>
                            <Menu.Item key="2" onClick={handleMenuItemClick}>
                                <Link to="/history" >Nossa História</Link>
                            </Menu.Item>
                            <Menu.Item key="3" onClick={handleMenuItemClick}>
                                <Link to="/events">Eventos</Link>
                            </Menu.Item>
                            <Menu.Item key="4" onClick={handleMenuItemClick}>
                                <Link to="/ajudar">Como Ajudar</Link>
                            </Menu.Item>
                            <Menu.Item key="5" onClick={handleMenuItemClick}>
                                <a  rel="noopener noreferrer"
                                    href="https://patinhasunidassc.petlove.com.br/"
                                    target="_blank"
                                    _msttexthash="44616"
                                    _msthash="175"
                                    >Nossa Lojinha</a>
                            </Menu.Item>
                            <Menu.Item key="6" onClick={handleMenuItemClick}>
                                <Link to="/pets">Pets</Link>
                            </Menu.Item>
                        </Menu>
        </div>



        </div>
      </header>
    </>
  );
}

export default Navigation;
