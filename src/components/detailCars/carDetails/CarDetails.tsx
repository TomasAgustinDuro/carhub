import { Link } from "react-router-dom";
import styles from "./carDetails.module.scss";

function CarDetails() {
  return (
    <aside className={styles.detallesAuto}>
      <article>
        <h3>Toyota Yaris 1.5 XLS PACK CVT Hatchback 2023</h3>
        <p>4.000 km - Buenos Aires</p>
      </article>

      <div className={styles.precio}>
        <p>Precio Contado</p>
        <p>$26.080.000</p>
        <div>
          <Link to="/dolar" className="link-black">
            Pasalo a dólares si necesitas
          </Link>
        </div>
      </div>

      <div className={styles.detallesTecnicos}>
        <div className={styles.detalleItem}>
          <span className={styles.detalleTitulo}>
            <strong>Año</strong>
          </span>
          <span className={styles.detalleDescripcion}>2023</span>
        </div>
        <div className={styles.detalleItem}>
          <span className={styles.detalleTitulo}>
            <strong>Versión</strong>
          </span>
          <span className={styles.detalleDescripcion}>1.5 XLS PACK CVT</span>
        </div>
        <div className={styles.detalleItem}>
          <span className={styles.detalleTitulo}>
            <strong>Transmisión</strong>
          </span>
          <span className={styles.detalleDescripcion}>Automático</span>
        </div>
      </div>

      <button aria-label="Reservar o agendar una visita para ver el auto">
        Reservas o agendar visita
      </button>
    </aside>
  );
}

export default CarDetails;
