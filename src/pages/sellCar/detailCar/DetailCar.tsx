import styles from "./detailCar.module.scss";
import fiesta1 from "./assets/image.webp";
import fiesta2 from "./assets/image1.webp";
import fiesta3 from "./assets/image2.webp";
import Gallery from "../../../components/gallery/Gallery";

import CarDetails from "../../../components/detailCars/carDetails/CarDetails";
import BasicInfoSection from "../../../components/detailCars/basiInfoSection/BasicInfoSection";
import FeaturesSection from "../../../components/detailCars/FeaturesSection/FeaturesSection";
import RecommendedCars from "../../../components/detailCars/RecommendedCars/RecommendedCars";

function DetailCar() {
  const images = [fiesta1, fiesta2, fiesta3];

  return (
    <main>
      <section aria-labelledby="galeria-title" className={styles.galeria}>
        <Gallery images={images} />
        <CarDetails />
      </section>
      <BasicInfoSection />
      <FeaturesSection />
      <RecommendedCars />
    </main>
  );
}

export default DetailCar;
