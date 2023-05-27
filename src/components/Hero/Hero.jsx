import React from "react";
import styles from "./hero.module.scss";
import Img from "../../assets/images/Businessman.png";
import Shape from "../../assets/images/BurgerShape.png";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.contant}>
            <h1 className={styles.title}>Um slogan chamativo aqui.</h1>
            <p className={styles.text}>
              Um texto sobre o seu produto ou serviço. Explique
              <span> porque ele évalioso</span> e direcione o usuário ao próximo
              objetivo.
            </p>
            <div className={styles.buttons}>
              <button type="button">Eu quero!</button>
              <button type="button">Conhecer mais</button>
            </div>
          </div>
          <div className={styles.img}>
            <img
              className={styles.man}
              src={Img}
              alt="Businessman investing in bitcoin"
            />
            <img className={styles.shape} src={Shape} alt="Burger Shape" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
