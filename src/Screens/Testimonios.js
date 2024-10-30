import React from "react";
import styles from "./Testimonios.module.css";
import ImagenA from "../assets/Imagen1.1.jpg";
import ImagenB from "../assets/Imagen1.2.jpg";
import ImagenC from "../assets/Imagen1.3.jpg";

const testimonios = [
  {
    imagen: ImagenA,
    texto: "Participar en los eventos de reforestación de ArboVita ha sido una experiencia enriquecedora. Además, la pagina web hace que donar sea fácil y seguro.",
    nombre: "María R.",
  },
  {
    imagen: ImagenB,
    texto: "Gracias a ArboVita, pude ser parte de una jornada de reforestación en mi comunidad. Donar a través de su web me permitió apoyar esta causa desde cualquier lugar.",
    nombre: "José G.",
  },
  {
    imagen: ImagenC,
    texto: "ArboVita me brindó la oportunidad de contribuir a un cambio real. Desde la organización del evento hasta la facilidad para donar en línea, todo ha sido excelente.",
    nombre: "Pedro M.",
  }
];

const Testimonios = () => {
  return (
    <div className={styles.testimoniosSeccion}>
        <h2>Testimonios de Donadores y Participantes</h2>
      <div className={styles.testimoniosGrid}>
        {testimonios.map((testimonio, index) => (
          <div key={index} className={styles.testimonio}>
            <img src={testimonio.imagen} alt={`Foto de ${testimonio.nombre}`} className={styles.imagen} />
            <p className={styles.texto}>"{testimonio.texto}"</p>
            <p className={styles.nombre}>{testimonio.nombre}</p>
            <p className={styles.ubicacion}>{testimonio.ubicacion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonios;
