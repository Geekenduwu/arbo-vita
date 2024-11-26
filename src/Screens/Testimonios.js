import React, { useState } from "react";
import styles from "./Testimonios.module.css";
import ImagenA from "../assets/Imagen1.1.jpg";
import ImagenB from "../assets/Imagen1.2.jpg";
import ImagenC from "../assets/Imagen1.3.jpg";

const testimonios = [
  {
    imagen: ImagenA,
    texto: "Participar en los eventos de reforestación de ArboVita ha sido una experiencia enriquecedora. Además, la página web hace que donar sea fácil y seguro.",
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
  },
];

const faqPreguntas = [
  {
    pregunta: "¿Qué hace esta ONG?",
    respuesta: "Nos enfocamos en proyectos de reforestación y cuidado del medio ambiente para combatir el cambio climático.",
  },
  {
    pregunta: "¿Cómo puedo participar en sus actividades?",
    respuesta: "Puedes registrarte a través de nuestra página web para unirte a eventos o ser voluntario en jornadas de reforestación.",
  },
  {
    pregunta: "¿Cómo se utilizan las donaciones?",
    respuesta: "Las donaciones se destinan a la compra de árboles, herramientas y recursos para nuestros proyectos de reforestación.",
  },
  {
    pregunta: "¿Las donaciones son deducibles de impuestos?",
    respuesta: "Sí, emitimos comprobantes fiscales para que puedas deducir tus donaciones en tu declaración anual.",
  },
  {
    pregunta: "¿Dónde tienen proyectos de reforestación?",
    respuesta: "Trabajamos en diversas comunidades rurales afectadas por la deforestación en todo el país.",
  },
];

const Testimonios = () => {
  const [faqAbierto, setFaqAbierto] = useState(null);

  const toggleFaq = (index) => {
    setFaqAbierto(faqAbierto === index ? null : index);
  };

  return (
    <div className={styles.testimoniosSeccion}>
      <h2>Testimonios de Donadores y Participantes</h2>
      <div className={styles.testimoniosGrid}>
        {testimonios.map((testimonio, index) => (
          <div key={index} className={styles.testimonio}>
            <img src={testimonio.imagen} alt={`Foto de ${testimonio.nombre}`} className={styles.imagen} />
            <p className={styles.texto}>"{testimonio.texto}"</p>
            <p className={styles.nombre}>{testimonio.nombre}</p>
          </div>
        ))}
      </div>

      <div className={styles.faqSeccion}>
        <h2>Preguntas Frecuentes (FAQ)</h2>
        <div className={styles.faqGrid}>
          {faqPreguntas.map((item, index) => (
            <div key={index} className={styles.faqItem}>
              <button
                onClick={() => toggleFaq(index)}
                className={styles.faqPregunta}
              >
                {item.pregunta}
                <span>{faqAbierto === index ? "-" : "+"}</span>
              </button>
              {faqAbierto === index && <p className={styles.faqRespuesta}>{item.respuesta}</p>}
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Testimonios;
