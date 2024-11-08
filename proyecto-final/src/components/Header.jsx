import React, { useEffect, useState } from "react";
import { header } from "../data";
import { Nav } from "./index";
import './Header.css'

const Header = () => {
  const [isActive, setIsAvtive] = useState(false);
  const { logo } = header;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 80 ? setIsAvtive(true) : setIsAvtive(false);
    });
  }, []);

  return (
    <header className={`${isActive ? "header-active" : "bg-transparent"} fixed mx-auto`}>
      <img src={logo} alt="logo" className="logo" />
      <Nav />
      <div className="btns-container">
        <button className="login-btn">Log in</button>
        <button className="signin-btn">Sign in</button>
      </div>
    </header>
  );
};

export default Header;

