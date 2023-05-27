import React from "react";
import PropTypes from "prop-types";
import styles from "./contato.module.scss";

function Contato({ props }) {
  return (
    <section className={styles.contato} id="conosco">
      <div className="container">
        <div className={styles.container}>
          Contato Component
          {props}
        </div>
      </div>
    </section>
  );
}

Contato.propTypes = {
  props: PropTypes.string.isRequired,
};

export default Contato;
