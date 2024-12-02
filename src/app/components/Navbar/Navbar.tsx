"use client";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import "./Navbar.css";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [toggleMenu, settoggleMenu] = useState(false);
  return (
    <>
      <nav className="app__navbar">
        <div className="app__logo">
          <Image
            src={images.gericht}
            alt="Logo"
            width={150}
            className="Image"
          />
        </div>
        <ul className="app__navbar-links">
          <li className="p__opensans">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="p__opensans">
            <Link href="#about">About</Link>
          </li>
          <li className="p__opensans">
            <Link href="../container/Menu">Menu</Link>
          </li>
          <li className="p__opensans">
            <Link href="../container/Award">Awards</Link>
          </li>
          <li className="p__opensans">
            <Link href={"#contact"}>Contact</Link>
          </li>
        </ul>
        <div className="app__login">
          <Link href="#login" className="login__link">
            Log in / registration
          </Link>
          <div />
          <Link href="/" className="login__link">
            Book Table
          </Link>
        </div>

        {/* small screen */}
        <div className="app__navbar-small-screen">
          <GiHamburgerMenu
            size={30}
            color="#fff"
            className="navbar__humburger"
            onClick={() => settoggleMenu(true)}
          />
          {toggleMenu && (
            <div className="app__navbar-smallscreen-overlay flex__center slide-bootom">
              <MdOutlineRestaurantMenu
                size={30}
                className="navbar__close-icon"
                onClick={() => settoggleMenu(false)}
              />
              <ul className="app__navbar-smallscreen_links">
                <li className="p__opensans">
                  <Link href="#home" onClick={() => settoggleMenu(false)}>
                    Home
                  </Link>
                </li>
                <li className="p__opensans">
                  <Link
                    href="#about"
                    onClick={() => settoggleMenu(false)}
                  >
                    About
                  </Link>
                </li>
                <li className="p__opensans">
                  <Link href="../container/Menu" onClick={() => settoggleMenu(false)}>
                    Menu
                  </Link>
                </li>
                <li className="p__opensans">
                  <Link href={"../container/Award"} onClick={() => settoggleMenu(false)}>
                    Awards
                  </Link>
                </li>
                <li className="p__opensans">
                  <Link href={"#contact"} onClick={() => settoggleMenu(false)}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
