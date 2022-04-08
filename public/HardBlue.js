import styles from "../styles/HardBlue.module.scss";
import Link from "next/link";

function HardBlue() {
  return (
    <div className={styles.container} id="hardblue">
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <div className={styles.textbox}>
          <h1 className="title">What is Hard Blue? </h1>
          <p className="text">
            {" "}
            Hard blue is the long-term substitute for Bitcoin. Hard Blue acts as
            a store of value but with much greater scalability than Bitcoin,
            being able to allow value transfers between people with low
            commissions.
          </p>
          <div className={styles.buttondiv}>
            <Link href="/whitepaper" passHref={true}>
              <button
                data-aos="zoom-in-up"
                data-aos-duration="500"
                data-aos-anchor-placement="top-bottom"
                data-aos-delay="500"
                className={styles.button}
              >
                Whitepaper
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HardBlue;
