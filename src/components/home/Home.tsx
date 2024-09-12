import styles from "./home.module.scss";
import autos from "../../assets/autos.json";
import fiesta from "./assets/fiesta.jpg";
import autosVenta from "./assets/autos-png.png";

function Home() {
  interface Auto {
    model: string;
    year: number;
    mileage: number;
    transmission: string;
    img: string;
    price: number;
  }

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

      <section>
        <h1 className={styles.title}>Recomendaciones</h1>

        <div className={styles.recomendationContainer}>
          {autos.map((car: Auto, index: number) => {
            return (
              <div key={index} className={styles.cardRecomendation}>
                <img src={fiesta} alt={"imagen de " + car.model} />
                <div className={styles.informationRecomendation}>
                  <h3>{car.model}</h3>
                  <div className={styles.informationFeatures}>
                    <p>{car.year} </p>
                    <p> - </p>
                    <p>{car.mileage} km </p>
                    <p> - </p>
                    <p>{car.transmission}</p>
                  </div>
                </div>

                <div className={styles.price}>
                  <p>Precio Contado</p>
                  <h2>
                    <strong>$ {car.price}</strong>
                  </h2>
                </div>

                <div>
                  <button>+ info</button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className={styles.sectionVenta}>
        <div className={styles.texto}>
          <h1>Cambiá o vendé tu auto de manera sencilla y rápida</h1>
          <h3><span>💲 </span> Cotizá tu auto en nuestra sucursal.</h3>
          <hr />
          <h3><span>🤝 </span> Vendé tu auto sin intermediarios</h3>
          <hr />
          <h3><span> 🔄 </span>Déjalo como forma de pago y llévate otro de nuestro garage</h3>
          <hr />
          <h3><span> 💳 </span> Financia tu nuevo auto de la manera que mas te convenga</h3>
        </div>

        <img src={autosVenta} alt="" />
      </section>
    </>
  );
}

export default Home;
