import React from "react";
import styles from "./Proyectos.module.css";
import ImagenC from "../assets/ImagenC.jpeg";
import ImagenD from "../assets/ImagenD.jpg";

const Proyectos = () => {
  return (
    <div name="Proyectos" className={styles.Proyectos}>
      <div className={styles.titleContainer}>
        <h1>Nuestros Proyectos</h1>
        <div className={styles.contentContainer}>
          <img src={ImagenC} alt="Descripción de la Imagen" className={styles.logo} />
          <div className={styles.textContainer}>
            <h2>Bosque Urbano</h2>
            <p>
              En el bosque urbano de Ciudad Victoria, ArboVita ha llevado a cabo exitosas actividades de reforestación, con el objetivo de mejorar y revitalizar esta área natural. A través de la participación activa de la comunidad, hemos sembrado árboles que no solo embellecen el entorno, sino que también contribuyen a la salud del ecosistema local.
            </p>
          </div>
        </div>
        <br></br>
        <div className={styles.contentContainer}>
          <img src={ImagenD} alt="Descripción de la Imagen" className={styles.logo} />
          <div className={styles.textContainer}>
            <h2>Paseo Pedro José Mendez</h2>
            <p>
            Se llevaron a cabo actividades de reforestación organizadas por ArboVita en Paseo Pedro José Méndez. Durante esta jornada, se sembraron árboles con el objetivo de revitalizar y embellecer el área, contribuyendo así a la mejora del ecosistema local y promoviendo un entorno más saludable para la comunidad.
            </p>
          </div>
        </div>
       <br></br>
        <h2>Ubicación de los Proyectos</h2>
        <p>
            Las estrellas rojas indican la ubicación
            </p>
        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1Te7FVwwIbQPywKJ9tgD32rUu5vsmI8g&ehbc=2E312F&noprof=1"></iframe>

      </div>
    </div>
  );
};

export default Proyectos;
