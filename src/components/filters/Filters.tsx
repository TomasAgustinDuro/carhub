import styles from "./filters.module.scss";
import Accordion from "../accordion/Accordion";

function Filters() {
  return (
    <div className={styles.containerFilters}>
      <div className={styles.filterActions}>
        <p>Ocultar filtros</p>
        <p>Limpiar</p>
      </div>

      <div className={styles.filters}>
        <Accordion question={"Marcas"} answer={["Manual", "Transmision"]} />
        <Accordion question={"Estado "} answer={["Reservado", "Disponible"]} />
        <Accordion
          question={"Kilometraje "}
          answer={[
            "- 20.000 km",
            "20,000 - 50,000 km",
            "50,000 - 100,000 km",
            "+ 100.000 km",
          ]}
        />
        <Accordion
          question={"Color "}
          answer={["Negro", "Plateado", "Blanco", "Gris", "Otro", "Rojo"]}
        />
        <Accordion
          question={"Combustible "}
          answer={["Nafta", "Gasoil", "Gas"]}
        />
      </div>
    </div>
  );
}
export default Filters;
