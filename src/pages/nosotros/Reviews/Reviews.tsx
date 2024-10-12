import reviews from "../../../assets/reviews.json";
import Review from "../../../interfaces/Review";
import styles from "./Reviews.module.scss";
import { FaRegStar } from "react-icons/fa6";
import FormReview from "./components/form/Form";

function Reviews() {


  return (
    <section>
      <div className={styles.containerFormReviews}>
        <FormReview /> 


      </div>

      <div>
        {reviews.map((review: Review) => (
          <div key={review.id} className={styles.containerReview}>
            <div className={styles.reviewsHeader}>
              <p> <FaRegStar /> <strong>{review.name}</strong></p>

              <p>{review.date}</p>
            </div>

            <p id={styles.textReview}>"{review.review}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;
