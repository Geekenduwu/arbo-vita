import React from "react";
import styles from "./Participa.module.css";

const Participa = () => {
    return (
      <div name="Participa" className={styles.Participa}>
        <h2>Participa</h2>
        <h1>
          Únete a nuestros eventos de reforestación y sé parte del cambio. Ayúdanos a plantar árboles, restaurar áreas verdes y cuidar el planeta. ¡Cada árbol cuenta para un futuro más verde! <b>¡Regístrate!</b>
        </h1>
        <br />
        <form
          className={styles.form}
          method="POST"
          action=""
        >
          <label htmlFor="Name">Nombre</label>
          <input id="Name" name="Name" className={styles.input} required />
  
          <label htmlFor="Email">Correo Electrónico</label>
          <input
            id="Email"
            name="Email"
            type="email" 
            className={styles.input}
            required
          />
  
          <label htmlFor="Numero">Número de Participantes</label>
          <input
            id="Numero"
            name="Numero"
            type="number"
            className={styles.input}
            required
          />
  
          <label htmlFor="Message">Mensaje</label>
          <textarea
            id="Message"
            name="Message"
            className={styles.textArea}
            required
          ></textarea>
          <br />
          <button type="submit" className={styles.button}>Enviar</button>
        </form>
      </div>
    );
  };

export default Participa;
