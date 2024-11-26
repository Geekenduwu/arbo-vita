import React from "react";
import { Link } from "react-scroll";
import styles from "./Dona.module.css";
import ImagenB from "../assets/ImagenB.png";
import ImagenA from "../assets/Imagen2.1.jpg";
import ImagenD from "../assets/Imagen2.2.png";
import ImagenC from "../assets/Imagen2.3.jpg";
import ImagenE from "../assets/Imagen2.4.jpg";
import ImagenF from "../assets/Imagen2.5.png";

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
<div className={styles.colaboradores}>
  <h2>Colaboradores</h2>
  <p>
    Nuestros colaboradores son la base del cambio, aportando su respaldo y confianza para motivar a otros a contribuir. Estas instituciones demuestran su compromiso con un futuro más sostenible. ¡Gracias por apoyarnos!
  </p>
  <div className={styles.logoContainer}>
    <img src={ImagenA} alt="Colaborador 1" className={styles.logoColaborador} />
    <img src={ImagenD} alt="Colaborador 2" className={styles.logoColaborador} />
    <img src={ImagenC} alt="Colaborador 3" className={styles.logoColaborador} />
    <img src={ImagenE} alt="Colaborador 4" className={styles.logoColaborador} />
    <img src={ImagenF} alt="Colaborador 5" className={styles.logoColaborador} />
  </div>
</div>

    </div>
  );
};

export default Dona;
