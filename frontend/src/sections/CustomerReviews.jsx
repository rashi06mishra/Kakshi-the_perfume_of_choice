import ReviewCard from "../components/ReviewCard"
import { reviews } from "../constants"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CustomerReviews = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

    return (
      <section className="max-container">
        <h3 className="font-palanquin text-center text-4xl font-bold">What Our 
          <span className="text-yellow-600"> Customers </span>
          Say?
        </h3>
        <p className="m-auto mt-4 max-w-lg text-center">Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
        <Carousel 
          draggable={true}
          showDots={true}
          responsive={responsive}
          className="mt-20 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14 ">
        {/* <div > */}
          {reviews.map( (review) => (
            <ReviewCard
            key = {review.customerName}
            // imgURL = {review.imgURL}
            customerName = {review.customerName}
            rating = {review.rating}
            feedback = {review.feedback}  
            />
          ))}
        {/* </div> */}
        </Carousel>

      </section>
    )
  }
  
  export default CustomerReviews