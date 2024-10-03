import React from "react";
import { Link } from "react-scroll";
import styles from "./Dona.module.css";
import ImagenB from "../assets/ImagenB.png";

const Dona = () => {
  return (
    <div name="Dona" className={styles.Dona}>
      <div className={styles.titleContainer}>
        
        
      <h1>Planta un Futuro Verde: ¡Haz tu Donación Hoy!</h1>
      <img src={ImagenB} alt="Descripción de la Imagen" className={styles.logo} />
        <p>
        Tu donación no solo planta un árbol, sino que también crea un legado verde que mejora el aire, protege la biodiversidad y transforma espacios urbanos. Con tu apoyo, juntos hacemos un mundo más limpio y saludable para todos. ¡Ayúdanos a reforestar!
        </p>
      </div>

      
      
      
      
      <div className={styles.ctaContainer}>
  <a 
    href="https://www.paypal.com/donate"
    target="_blank" 
    rel="noopener noreferrer" 
    className={styles.callToAction}
    style={{ textDecoration: 'none' }}
  >
    Contribuye Ahora
  </a>
</div>

    </div>
  );
};

export default Dona;
