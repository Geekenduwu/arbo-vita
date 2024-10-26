import React, { useState } from "react";
import styles from "./Galeria.module.css";
import ImagenA from "../assets/Imagen1.jpg";
import ImagenB from "../assets/Imagen2.jpeg";
import ImagenC from "../assets/Imagen3.jpg";

const Galeria = () => {
    const images = [ImagenA, ImagenB, ImagenC];
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
  
    const goToSlide = (index) => {
      setCurrentIndex(index);
    };
  
    return (
        
      <div name="Galeria" className={styles.Galeria}>
        <h1>Cada imagen cuenta una historia verde que hemos cumplido.</h1>
        <br></br>
        <div className={styles.carouselContainer}>

          <button className={styles.prevButton} onClick={prevSlide}>❮</button>
          
          <img 
            src={images[currentIndex]} 
            alt={`Imagen ${currentIndex + 1}`} 
            className={styles.carouselImage} 
          />
          
          <button className={styles.nextButton} onClick={nextSlide}>❯</button>
        </div>
        <div className={styles.indicatorsContainer}>
          {images.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${currentIndex === index ? styles.active : ""}`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  };
  
  export default Galeria;