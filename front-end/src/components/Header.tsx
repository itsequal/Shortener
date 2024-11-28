import React from "react";
import Image from "next/image";

function Header() {
  return (
    <nav className="border-gray-200 bg-yoimiya shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <div className="ml-0 flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src="/img/icon.png"
            className=""
            width="72"
            height="72"
            alt="asd"
          ></Image>
          <span className="text-4xl text-white font-mclaren">
            Paimon Shortener
          </span>
        </div>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  md:bg-yoimiya">
            <li>
              <a
                href="#"
                className="font-mclaren block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page"
              >
                PRICING
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-mclaren block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                FEATURES
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-mclaren block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                LOG IN
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-mclaren py-2 px-3 bg-white text-gray-900 hover:bg-gray-100 md:hover:bg-white rounded-md md:hover:text-blue-700 md:p-2 dark:text-yoimiya md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                GET STARTED
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
