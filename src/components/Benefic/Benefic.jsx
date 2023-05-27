import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Target from "../../assets/images/Target.png";
import Ethereum from "../../assets/images/Ethereum.png";
import CreditCard from "../../assets/images/CreditCard.png";
import { ReactComponent as AddBtn } from "../../assets/icons/add.svg";
import styles from "./benefic.module.scss";

const animation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.1 },
  }),
};

function Benefic() {

  const cards = [
    {
      img: Target,
      title: "Rápido",
      text: "Aproveite esta seção para destacar os benefícios do seu produto ou serviço.",
      btn: AddBtn,
    },
    {
      img: Ethereum,
      title: "Do seu jeito",
      text: "Aproveite esta seção para destacar os benefícios do seu produto ou serviço.",
      btn: AddBtn,
    },
    {
      img: CreditCard,
      title: "Como você queria",
      text: "Aproveite esta seção para destacar os benefícios do seu produto ou serviço.",
      btn: AddBtn,
    },
  ];
  return (
    <section className={styles.benefic} id="fazemos">
      <div className="container">
        <div className={styles.container}>
          <h2 className={styles.title}>
            Um subtítulo para quem rolou até aqui!
          </h2>
          <hr className={styles.line} />
          <p className={styles.text}>
            Aproveite esta seção para destacar os benefícios do seu produto ou
            serviço. Palavras-chave ajudam no SEO.
          </p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              amount: 0.1,
              once: true,
            }}
            className={styles.cards}
          >
            {cards.map((item, i) => (
              <MCard
                custom={i + 1}
                variants={animation}
                key={item.title}
                img={item.img}
                title={item.title}
                text={item.text}
                Btn={item.btn}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const Card = forwardRef(({ img, title, text, Btn }, ref) => (
  <div className={styles.cardWrapper} ref={ref}>
    <div className={styles.cardImg}>
      <img src={img} alt={title} />
    </div>
    <h3 className={styles.cardTitle}>{title}</h3>
    <p className={styles.cardText}>{text}</p>
    <div className={styles.addBtn}>
      <Btn />
    </div>
  </div>
));

Card.propTypes = {
  img: PropTypes.shape.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  Btn: PropTypes.shape.isRequired,
};

const MCard = motion(Card);

export default Benefic;
