import React from "react";
import styles from "./Footer.module.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import LogoImagen from "../assets/LogoImagen.png";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.columns}>
        <div className={styles.logoContainer}>
          <img src={LogoImagen} alt="ArboVita Logo" className={styles.logo} />
        </div>

        <div className={styles.infoContainer}>
          <h2><b>Contáctanos</b></h2>
          <p><b>Dirección:</b> Calle Hidalgo 525, Ciudad Victoria, México</p>
          <p><b>Teléfono:</b> +52 55 1234 5678</p>
          <p><b>Email:</b> arbovita@gmail.com</p>
          <br></br>

          <div className={styles.socialMediaContainer}>
            <a href="https://facebook.com/ArboVita" target="_blank" rel="noopener noreferrer">
              <FaFacebook className={styles.socialIcon} />
            </a>
            <a href="https://instagram.com/ArboVita" target="_blank" rel="noopener noreferrer">
              <FaInstagram className={styles.socialIcon} />
            </a>
            <a href="https://twitter.com/ArboVita" target="_blank" rel="noopener noreferrer">
              <FaTwitter className={styles.socialIcon} />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        © ArboVita, 2024
      </div>
    </footer>
  );
};

export default Footer;
