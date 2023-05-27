import React from "react";
import businessman from "../../assets/images/Man.png";
import styles from "./ajudamos.module.scss";

function Ajudamos() {
  return (
    <section className={styles.ajudamos} id="ajudamos">
      <div className="container">
        <div className={styles.container}>
          <div className={styles.content}>
            <p className={styles.label}>#contecomagente</p>
            <h2 className={styles.title}>Simples, rápido e do seu jeito.</h2>
            <p className={styles.text}>
              Mostre os valores da sua marca e como ela pode fazer parte da vida
              do usuário que está lendo. Gerar identificação é a chave para
              <span>conquistar seu cliente.</span>
            </p>
            <button type="button" className={styles.button}>
              Eu quero!
            </button>
          </div>
          <div className={styles.img}>
            <img src={businessman} alt="businessman" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ajudamos;
