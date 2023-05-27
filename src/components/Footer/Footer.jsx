import React, { useState } from "react";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as Insta } from "../../assets/icons/insta.svg";
import { ReactComponent as Facebook } from "../../assets/icons/facebook.svg";
import styles from "./footer.module.scss";

function Footer() {
  const [subscription, setSubscription] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setTimeout(() => {
      setSubscription(false);
    }, 1500);
  }
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.header}>
            <a href="/" className={styles.logo}>
              <Logo />
            </a>
            <div className={styles.menu}>
              <nav className={styles.nav}>
                <ul className={styles.navList}>
                  <li className={styles.navItem}>
                    <a href="#fazemos">o que fazemos</a>
                  </li>
                  <li className={styles.navItem}>
                    <a href="#ajudamos">como te ajudamos</a>
                  </li>
                  <li className={styles.navItem}>
                    <a href="#conosco">fale conosco</a>
                  </li>
                </ul>
              </nav>
              <div className={styles.icons}>
                <Insta />
                <Facebook />
              </div>
            </div>
          </div>
          <form action="/" className={styles.form}>
            <p className={styles.formText}>Receba as novidades do nice</p>
            {!subscription && (
              <input
                type="email"
                className={styles.input}
                placeholder="nome@email.com"
              />
            )}
            {!subscription ? (
              <button
                type="button"
                className={styles.btn}
                onClick={(e) => {
                  setSubscription(!subscription);
                  handleSubmit(e);
                }}
              >
                Inscrever
              </button>
            ) : (
              <button type="button" className={styles.active}>
                Thank you for subscribing!
              </button>
            )}
          </form>
          <hr className={styles.line} />
          <p className={styles.text}>
            Nice template by @lopesluiza on Figma - 2021
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
