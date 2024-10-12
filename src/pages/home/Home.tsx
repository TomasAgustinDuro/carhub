import styles from "./home.module.scss";
import Recommendation from "../../components/home/recom/Recommendation";
import Sell from "../../components/home/sell/Sell";

function Home() {
  return (
    <>
      <section>
        <div className={styles.container}>
          <div className={styles.text}>
            <h2>Obtené tu próximo auto</h2>
            <button>Elegir auto</button>
          </div>
          <div className={styles.background}></div>
        </div>
      </section>

      <Recommendation />
      <Sell />
     
    </>
  );
}

export default Home;
