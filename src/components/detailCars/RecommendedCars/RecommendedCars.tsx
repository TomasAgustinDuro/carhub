import autos from "../../../assets/autos.json";
import CardSell from "../../card/Card";
import Auto from "../../../interfaces/auto";
import styles from "./recommendedCars.module.scss";

function RecommendedCars() {
  return (
    <section aria-labelledby="precios-title" className={styles.containerRecommendedCars}>
      <h2 id="precios-title">Precios Similares</h2>
      <div className={styles.recommendedCars}>
        {autos.slice(0, 5).map((car: Auto, index: number) => (
          <CardSell key={index} car={car} index={index} />
        ))}
      </div>
    </section>
  );
}

export default RecommendedCars;
