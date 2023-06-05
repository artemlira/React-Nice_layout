import React from "react";
import Chat from "../../assets/images/Chat.png";
import whatsapp from "../../assets/icons/whatsapp.svg";
import styles from "./contato.module.scss";

function Contato() {
  return (
    <section className={styles.contato} id="conosco">
      <div className="container">
        <div className={styles.container}>
          <div className={styles.label}>
            <img src={Chat} alt="Chat" />
          </div>
          <h2 className={styles.title}>Ainda tem dúvidas? Fale conosco!</h2>
          <hr className={styles.line} />
          <div className={styles.wrapper}>
            <div className={styles.content}>
              <p className={styles.contentText}>
                Ofereça um meio de comunicação direto. Pode ser um&nbsp;
                <span className={styles.contentEmail}>
                  contato@email.com.br
                </span>
              </p>
              <p className={styles.contentText}>
                Ou crie um formulário ao lado que entrem em contato&nbsp;
                <span className={styles.contentSpan}>
                  o mais rápido possível!
                </span>
              </p>
              <div className={styles.whatsapp}>
                <img
                  src={whatsapp}
                  alt="whatsapp"
                  className={styles.whatsappImg}
                />
                <p className={styles.whatsappText}>Hey! Estamos no whatsapp!</p>
              </div>
            </div>
            <form action="/" className={styles.form}>
              <label htmlFor="#name" className={styles.name}>
                Nome
                <input
                  type="text"
                  className={styles.inputName}
                  placeholder="Nome Sobrenome"
                />
              </label>
              <label htmlFor="#email" className={styles.email}>
                Email
                <input
                  type="email"
                  className={styles.inputEmail}
                  placeholder="nome@email.com.br"
                />
              </label>
              <label htmlFor="#phone" className={styles.phone}>
                Telefone
                <input
                  type="tel"
                  className={styles.inputPhone}
                  placeholder="21 9988-7766"
                />
              </label>
              <button type="button" className={styles.button}>
                Enviar!
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contato;
