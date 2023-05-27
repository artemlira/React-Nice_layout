import React, { useState, forwardRef } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as Insta } from "../../assets/icons/insta.svg";
import { ReactComponent as Facebook } from "../../assets/icons/facebook.svg";
import styles from "./header.module.scss";

const animation = {
  hidden: {
    x: "-100%",
    scale: 0.3,
  },
  visible: {
    x: 0,
    scale: 1,
    transition: { duration: 0.4 },
  },
  exit: {
    x: "100%",
  },
};

function Header() {
  const [openMenu, setOpenMenu] = useState();
  const closeMenuClick = () => {
    setOpenMenu(false);
  };

  const closeMenuKey = (e) => {
    if (e.type === "keydown" && e.key === "Enter") {
      setOpenMenu(false);
    }
  };

  const managementMenuKey = (e) => {
    if (e.type === "keydown" && e.key === "Enter") {
      setOpenMenu(!openMenu);
    }
  };
  return (
    <header className={styles.header}>
      <div className="container">
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          className={styles.container}
        >
          <a href="/" className={styles.logo}>
            <Logo />
          </a>
          <div className={styles.menu}>
            {!openMenu ? (
              <Menu
                variants={animation}
                openMenu={openMenu}
                closeMenuClick={closeMenuClick}
                closeMenuKey={closeMenuKey}
              />
            ) : (
              <MMenu
                variants={animation}
                openMenu={openMenu}
                closeMenuClick={closeMenuClick}
                closeMenuKey={closeMenuKey}
              />
            )}
            <div className={styles.icons}>
              <Insta />
              <Facebook />
            </div>
          </div>
          <div
            role="button"
            tabIndex={0}
            className={
              !openMenu
                ? `${styles.burgerMenu}`
                : `${styles.burgerMenu} ${styles.active}`
            }
            onClick={() => setOpenMenu(!openMenu)}
            onKeyDown={(e) => managementMenuKey(e)}
          >
            <span
              className={
                !openMenu
                  ? `${styles.menuTablet}`
                  : `${styles.menuTablet} ${styles.active}`
              }
            />
          </div>
        </motion.div>
      </div>
    </header>
  );
}

const Menu = forwardRef(({ openMenu, closeMenuClick, closeMenuKey }, ref) => (
  <div
    className={
      !openMenu
        ? `${styles.navWrapper}`
        : `${styles.navWrapper} ${styles.active}`
    }
    ref={ref}
  >
    <nav
      className={!openMenu ? `${styles.nav}` : `${styles.active} ${styles.nav}`}
    >
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <a
            href="#fazemos"
            onClick={() => closeMenuClick()}
            onKeyDown={(e) => closeMenuKey(e)}
          >
            o que fazemos
          </a>
        </li>
        <li className={styles.navItem}>
          <a
            href="#ajudamos"
            onClick={() => closeMenuClick()}
            onKeyDown={(e) => closeMenuKey(e)}
          >
            como te ajudamos
          </a>
        </li>
        <li className={styles.navItem}>
          <a
            href="#conosco"
            onClick={() => closeMenuClick()}
            onKeyDown={(e) => closeMenuKey(e)}
          >
            fale conosco
          </a>
        </li>
      </ul>
    </nav>
  </div>
));

Menu.propTypes = {
  openMenu: PropTypes.bool.isRequired,
  closeMenuClick: PropTypes.func.isRequired,
  closeMenuKey: PropTypes.func.isRequired,
};

const MMenu = motion(Menu);

export default Header;
