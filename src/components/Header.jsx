import { useState } from "react";
import logo from "../assets/images/logo.svg";
import openMenuBtn from "../assets/images/icon-menu.svg";
import closeMenuBtn from "../assets/images/icon-menu-close.svg";
import Toogle from "./Toogle";

export default function Header(props) {
  let [showSideMenu, setSideMenu] = useState(true);

  return (
    <header className="fixed inset-x-0 top-0 h-24 pt-8 dark:bg-dark-gray">
      <div className="flex items-center justify-between h-full primary-container">
        <div>
          <img className="object-contain max-h-7" src={logo} />
        </div>

        <div
          className="sm:hidden"
          onClick={() => {
            setSideMenu(!showSideMenu);
          }}
        >
          <img
            className="object-contain fill-white"
            src={showSideMenu ? openMenuBtn : closeMenuBtn}
          />
        </div>
        <nav
          className={`${
            showSideMenu ? "hidden" : "block"
          } fixed h-full sm:h-auto sm:static sm:block inset-x-0  bg-gray-600/50 top-24`}
        >
          <ul className="flex flex-col w-3/4 h-full gap-8 p-16 ml-auto bg-white dark:bg-dark-gray dark:text-white first:text-sm sm:flex-row sm:w-full sm:p-0">
            <li>Home</li>
            <li>New</li>
            <li>Popular</li>
            <li>Trending</li>
            <li>Categories</li>
            <Toogle toogleDarkMode={props.toogleDarkMode} />
          </ul>
        </nav>
      </div>
    </header>
  );
}
