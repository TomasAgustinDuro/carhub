import Accordion from "../../accordion/Accordion";
import styles from "./featuresSection.module.scss";

function FeaturesSection() {
  return (
    <section
      className={styles.features}
      aria-labelledby="caracteristicas-title"
    >
      <h2 id="caracteristicas-title">Características</h2>
      <div className={styles.containerAccordion}>
        <Accordion
          question={"General"}
          answer={[`<strong>Tipo de combustible:</strong> Nafta`]}
        />

        <Accordion
          question={"Exterior"}
          answer={[
            `<strong>Número de puertas:</strong> 5`,
            "<br>",
            `<strong>Aleación de llantas:</strong> Aluminio`,
          ]}
        />
        <Accordion
          question={"Seguridad"}
          answer={[`<strong>ABS:</strong> Sí`]}
        />
        <Accordion
          question={"Interior"}
          answer={[`<strong>Tapizado:</strong> Cuero`]}
        />
        <Accordion
          question={"Entretenimiento"}
          answer={[
            `<strong>Radio:</strong> FM/AM`,
            "<br>",
            `<strong>Bluetooth:</strong> Bluetooth`,
            "<br>",
            `<strong>USB:</strong> USB`,
          ]}
        />
      </div>
    </section>
  );
}

export default FeaturesSection;
