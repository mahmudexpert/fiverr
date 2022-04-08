import styles from "../styles/Navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import MenuButton from "@material-ui/icons/Menu";

//TESTINGGG

import { useEffect } from "react";

function Navbar() {
  const [click, setClick] = useState(false);

  function handleClick() {
    setClick(!click);
  }

  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, [width]);
  function hideIt() {
    if (width <= 1024) {
      setClick(!click);
    }
  }

  return (
    <div className={`${styles.container} `}>
      {/* ${show && styles.nav_black} */}
      <div className={styles.logo} onClick={() => fullpage_api.moveTo(1)}>
        <span className={styles.logosecond}>
          <Image
            priority={true}
            src="/mini.png"
            height="40"
            width="40"
            alt="logo"
          />
        </span>
        <span className={styles.mainlogo}>
          <Image
            priority={true}
            src="/blue.png"
            height="30"
            width="200"
            alt="main-logo"
          />
        </span>
      </div>

      <div className={styles.menuicon} onClick={handleClick}>
        {click ? (
          <CloseIcon
            style={{ fill: "var(--white)", transform: "scale(1.5)" }}
          />
        ) : (
          <MenuButton
            style={{ fill: "var(--white)", transform: "scale(1.5)" }}
          />
        )}
      </div>
      <ul
        className={`${click && styles.menuactive}  ${styles.menu}`}
        onClick={hideIt}
      >
        <li
          className={`${styles.list} ${styles.hardblue}`}
          onClick={() => fullpage_api.moveTo(2)}
        >
          What is Hard Blue?
          <div className={styles.underline}></div>
        </li>

        <li className={styles.list} onClick={() => fullpage_api.moveTo(3)}>
          Hard money
          <div className={styles.underline}></div>
        </li>

        <li className={styles.list} onClick={() => fullpage_api.moveTo(4)}>
          Technology
          <div className={styles.underline}></div>
        </li>

        <li className={styles.list} onClick={() => fullpage_api.moveTo(5)}>
          Token
          <div className={styles.underline}></div>
        </li>

        <li className={styles.list}>
          <div className={styles.anchorparent}>
            <div className={styles.anchor}>
              <Link href="https://hardblue.medium.com/" passHref={true}>
                <Image
                  priority={true}
                  src="/medium.png"
                  height="32"
                  width="32"
                  alt="logo"
                />
              </Link>
            </div>
            <div className={styles.anchor}>
              <Link href="https://twitter.com/HardBlueProject" passHref={true}>
                <Image
                  priority={true}
                  src="/twitter.png"
                  height="32"
                  width="32"
                  alt="logo"
                />
              </Link>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
