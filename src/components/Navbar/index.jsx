import React from "react";
import Logo from "../../assets/logofinal.png";

function Navigation() {
  return (
    <>
      <header className="w-full p-4 bg-white text-dark">
        <div className="container flex justify-between h-16 mx-auto md:justify-center md:space-x-8">
          <ul className="items-stretch hidden space-x-3 md:flex">
            <li className="flex">
              <a rel="noopener noreferrer"
                href="www.google.com"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-"
                _msttexthash="44616"
                _msthash="170"
              >
                Pagina Inicial
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="www"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-"
                _msttexthash="44616"
                _msthash="171"
              >
                Pets
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="www"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border- dark:text-violet-600 dark:border-violet-600"
                _msttexthash="44616"
                _msthash="172"
              >
                Eventos
              </a>
            </li>
          </ul>
          <a
            rel="noopener noreferrer"
            href="www"
            aria-label="Voltar à página inicial"
            className="flex items-center p-2"
            _mstaria-label="254683"
            _msthash="173"
          >
            <img src={Logo} alt="Logo" className="h-20 w-auto"/>

          </a>
          <ul className="items-stretch hidden space-x-3 md:flex">
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="www"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-"
                _msttexthash="44616"
                _msthash="174"
              >
                Como Ajudar
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="www"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-"
                _msttexthash="44616"
                _msthash="175"
              >
                Nossa Lojinha
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="www"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-"
                _msttexthash="44616"
                _msthash="176"
              >
                Nossa História
              </a>
            </li>
          </ul>
          <button title="Button" type="button" className="p-4 md:hidden">
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
        </div>
      </header>
    </>
  );
}

export default Navigation;
