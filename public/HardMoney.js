import styles from "../styles/HardMoney.module.scss";
import Image from "next/image";

function HardMoney() {
  return (
    <div className={styles.container} id="hardmoney">
      <div className={styles.content}>
        <div className={styles.textcontainer}>
          <div className={styles.textbox}>
            <h1 className="title">Hard Blue like real hard money </h1>
            <p className="text">
              {" "}
              With a limited total supply, Hard Blue is a store of value like
              Bitcoin but without all the limitations that Bitcoin has.
            </p>
          </div>
        </div>

        <div className={styles.imagebox}>
          <Image src="/transparent.png" layout="fill" priority={true} />
        </div>
      </div>
    </div>
  );
}

export default HardMoney;
