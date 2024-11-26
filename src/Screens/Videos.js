import React from "react";
import styles from "./Videos.module.css";
import ImagenA from "../assets/Imagen2A.jpg";
import ImagenB from "../assets/Imagen2B.jpg";
import ImagenC from "../assets/Imagen2C.jpg";

const Videos = () => {
  return (
    <div name="Videos" className={styles.Videos}>
      <br></br>
      <br></br>
      <h2 className={styles.title}>Videos</h2>
      <h1>
        Explora esta sección de videos educativos sobre reforestación y la
        importancia del medio ambiente. Aprende cómo cada uno de nosotros puede
        contribuir a un futuro más sostenible. ¡Infórmate y actúa!
      </h1>
      <br></br>
      <div className={styles.videoContainer}>
        <iframe
          src="https://www.youtube.com/embed/OSzXWZ8JSd8?si=UXJFuOI5xETts-nu"
          title="YouTube Video 1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/r64FuWKBMjg?si=5O7VLV_pQ8bPFgxM"
          title="YouTube Video 2"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <br></br>
      <div className={styles.videoContainer}>
        <iframe
          src="https://www.youtube.com/embed/ctUqlzoB9JU?si=lHYufeC8kCUoxErR"
          title="YouTube Video 3"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/fgSw2gMrsFA?si=d78y1gi64Y0iWIHx"
          title="YouTube Video 4"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <br></br>

      
      <div className={styles.newsSection}>
        <h2 className={styles.newsTitle}>Noticias</h2>
        <p className={styles.texto}>
  Entérate de estas noticias, y aprende más sobre el medio ambiente.
</p>

        <div className={styles.newsContainer}>
         
          <div className={styles.newsCard}>
            <img
              src={ImagenA}
              alt="Iniciativa de Reforestación"
              className={styles.newsImage}
            />
            <h3>Iniciativa de Reforestación Urbana en el Parque Central</h3>
            <p>
              El próximo sábado, voluntarios se reunirán para plantar árboles
              nativos en el parque central. ¡Únete a nosotros!
            </p>
            <a
              href="https://chihuahua.gob.mx/prensa/impulsan-la-reforestacion-en-el-parque-central-con-semillas-de-mezquite"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.newsButton}
            >
              Leer Más
            </a>
          </div>
          <div className={styles.newsCard}>
            <img
              src={ImagenB}
              alt="Consejos para Cuidar Árboles"
              className={styles.newsImage}
            />
            <h3>Consejos para Cuidar Árboles en Zonas Urbanas</h3>
            <p>
              Descubre cómo mantener los árboles saludables en tu hogar y
              comunidad con estos simples consejos.
            </p>
            <a
              href="https://www.ecologiaverde.com/como-podemos-ayudar-a-cuidar-los-arboles-1422.html"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.newsButton}
            >
              Leer Más
            </a>
          </div>
         
          <div className={styles.newsCard}>
            <img
              src={ImagenC}
              alt="Resultados de la Jornada de Reforestación"
              className={styles.newsImage}
            />
            <h3>Resultados de Nuestra Última Jornada de Reforestación</h3>
            <p>
              Gracias a nuestros voluntarios, plantamos más de 500 árboles en
              áreas afectadas por deforestación.
            </p>
            <a
              href="https://www.jornada.com.mx/2024/07/15/estados/030n1est"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.newsButton}
            >
              Leer Más
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
