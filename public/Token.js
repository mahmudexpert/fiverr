
import styles from "../styles/Homepage.module.scss";
// import Image from "next/image";

function Token() {
  return (
    <div className={styles.container} id="token">
      <div className={styles.textbox}>
        <div className={styles.center}>
          <h1 className="title">Hard Blue token</h1>
          <p className="text">
		Ticker: HARD<br/>
		Total Supply: 2,100,000,000<br/>
          </p>
          <div className={styles.buttondiv}>
            <a href="https://cardanoscan.io/token/834df694fffed553fc565b04b08ddbbd668e90d9214326a16fff471848415244"><button
              data-aos="zoom-in-up"
              data-aos-duration="500"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="500"
              className={styles.button}
            >
              See in Cardanoscan
            </button></a>
          </div>
        </div>
      </div>	
    </div>
  );
}

export default Token;
