import styles from "./recommendation.module.scss"
import Auto from '../../../interfaces/auto'
import autos from '../../../assets/autos.json'
import CardSell from "../../card/Card"

function Recommendation() {
  return (
    <div className={styles.recommendation}>
      <h1 className={styles.title}>Recomendaciones</h1>

      <div className={styles.recomendationContainer}>
        {autos.slice(0, 3).map((car: Auto, index: number) => {
          return (
              <CardSell key={index} car={car} index={index} />
          );
        })}
      </div>
    </div>
  );
}
export default Recommendation;
