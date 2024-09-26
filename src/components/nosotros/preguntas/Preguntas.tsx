import { useState } from "react";
import informacionCompra from "./informacionCompra.json";
import informacionVenta from "./informacionVenta.json";
import styles from "./preguntas.module.scss";
import Accordion from "../../accordion/Accordion";
import sell from './assets/view-dark-interior-car-professional-260nw-2363528063.webp'

function Preguntas() {
  const [selectedInfo, setSelectedInfo] = useState("info1");
  const [activeButton, setActiveButton] = useState("info1");

function handleClick(text: string): void {
  setSelectedInfo(text);
  setActiveButton(text);
}

  return (
    <>
      <section>
        <div className={styles.containerHeader}>
          <h2><span>¿Tenés dudas?</span> Nosotros te las resolvemos</h2>
          <img src={sell} alt="Foto ilustrativa" />
        </div>
      </section>

      <section className={styles.sectionQuestions}>
        <button
          onClick={() => handleClick("info1")}
          className={`${styles.btn} ${activeButton === 'info1' ? styles.active : ""}`}
        >
          Compra
        </button>
        <button
          onClick={() => handleClick("info2")}
          className={`${styles.btn} ${activeButton === 'info2' ? styles.active : ""}`}
        >
          Venta
        </button>

        {selectedInfo === "info1" && (
          <div className={styles.containerQuestions}>
            {informacionCompra.map((elemento, index) => (
              <Accordion
                key={index} // Agrega key única para cada elemento
                question={elemento.pregunta}
                answer={elemento.respuesta}
              />
            ))}
          </div>
        )}

        {selectedInfo === "info2" && (
          <div className={styles.containerQuestions}>
            {informacionVenta.map((elemento, index) => (
              <Accordion
                key={index} // Agrega key única para cada elemento
                question={elemento.pregunta}
                answer={elemento.respuesta}
              />
            ))}
          </div>
        )}
      </section>
    </>
  );
}

export default Preguntas;
