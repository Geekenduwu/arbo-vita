import React from "react";
import { Link } from "react-scroll";
import styles from "./Inicio.module.css";
import ImagenA from "../assets/ImagenA.jpg";

const Inicio = () => {
  return (
    <div name="Inicio" className={styles.Inicio}>
      <div className={styles.titleContainer}>
        <img src={ImagenA} alt="Descripción de la Imagen" className={styles.logo} />
        
        <h1> Nuestra Misión y Objetivo<br />
        </h1>
        <p>
        En ArboVita, nos dedicamos a revitalizar los espacios urbanos de Cd. Victoria a través de la reforestación, con el propósito de restaurar y preservar nuestros espacios verdes. Buscamos mejorar la calidad de vida de la comunidad y fomentar una mayor conexión con la naturaleza. 
        </p>
        <p>
        Este proyecto facilita la recaudación de fondos y animar a la participación ciudadana en eventos de reforestación, apoyando así nuestra misión de hacer de nuestra ciudad un lugar más verde y sostenible.
        </p>
      </div>
      
       
      </div>

  );
};

export default Inicio;
