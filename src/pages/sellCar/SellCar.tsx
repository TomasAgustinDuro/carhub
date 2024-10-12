import styles from "./SellCar.module.scss";
import Auto from "../../interfaces/auto";
import autos from "../../assets/autos.json";
import CardSell from "../../components/card/Card";
import SearchBar from "../../components/searchBar/searchBar";
import Filters from "../../components/filters/Filters";

function SellCar() {
  return (
    <div>
      <SearchBar />

      <div className={styles.main}>
        <Filters />

        <section className={styles.containerCarsOffer}>
          <div className={styles.offerActions}>
            <p>Resultados</p>
            <p>Ordenar</p>
          </div>

          <div className={styles.containerCards}>
            {autos.map((car: Auto, index: number) => (
              <CardSell key={index} car={car} index={index} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default SellCar;
