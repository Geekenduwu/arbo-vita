import React from "react";
import styles from "./Videos.module.css";

const Videos = () => {
  return (
    <div name="Videos" className={styles.Videos}>
      <br></br>
      <br></br>
      <h2 className={styles.title}>Videos</h2>
      <h1>Explora esta sección de videos educativos sobre reforestación y la importancia del medio ambiente. Aprende cómo cada uno de nosotros puede contribuir a un futuro más sostenible. ¡Infórmate y actúa!</h1>
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
    </div>
  );
};

export default Videos;

