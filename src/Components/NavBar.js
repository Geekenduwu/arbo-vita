import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import styles from "./NavBar.module.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useScrollPosition } from "../Hooks/scrollPosition";
import LogoImagen from "../assets/LogoImagen.png";

const NavBar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const detectDimension = () => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectDimension);
    windowDimension.width > 1000 && setNavBarOpen(false);
    return () => {
      window.removeEventListener("resize", detectDimension);
    };
  }, [windowDimension]);

  const links = [
    { id: 1, link: "Inicio" },
    { id: 2, link: "Proyectos" },
    { id: 3, link: "Videos" },
    { id: 4, link: "Participa" },
  ];

  const scrollPosition = useScrollPosition();

  return (
    <div
      className={
        navBarOpen
          ? styles.navOpen
          : scrollPosition > 0
          ? styles.navOnScroll
          : styles.navBar
      }
    >
      {!navBarOpen && (
        <div className={styles.logoContainer}>
          <img src={LogoImagen} alt="Logo de ArboVita" className={styles.logoImage} />
          <p className={styles.logoText}>ArboVita</p>
        </div>
      )}
      {!navBarOpen && windowDimension.width < 1000 ? (
        <AiOutlineMenu
          color="#f1f1f1"
          onClick={() => setNavBarOpen(!navBarOpen)}
          size={25}
        />
      ) : (
        windowDimension.width < 1000 && (
          <AiOutlineClose
            onClick={() => setNavBarOpen(!navBarOpen)}
            color="#f1f1f1"
            size={25}
          />
        )
      )}
      {navBarOpen && (
        <ul className={styles.linksContainer}>
          {links.map(({ id, link }) => (
            <div key={id}>
              <Link
                onClick={() => setNavBarOpen(false)}
                to={link}
                smooth
                duration={500}
                className={styles.navLink}
              >
                {link === "Videos" ? "Videos" : link}
              </Link>
              <div className={styles.border}></div>
            </div>
          ))}
        </ul>
      )}
      {windowDimension.width > 1000 && (
        <ul className={styles.linksContainer}>
          {links.map(({ link, id }) => (
            <div key={id}>
              <Link
                onClick={() => setNavBarOpen(false)}
                to={link}
                smooth
                duration={500}
                className={styles.navLink}
              >
                {link === "Videos" ? "Videos" : link}
              </Link>
              <div className={styles.border}></div>
            </div>
          ))}
          <Link
            onClick={() => setNavBarOpen(false)}
            to="Dona"
            smooth
            duration={500}
            className={styles.DonaLink}
          >
            Donar
          </Link>
        </ul>
      )}
    </div>
  );
};

export default NavBar;