import React, { useState } from "react";
import iconStar from "../assets/icon-star.svg";
import "./Rating.css";
import ThankYou from "./ThankYou";

function Rating() {
  const [selectedRating, setSelectedRating] = useState();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChangeRating = (event) => {
    setSelectedRating(event.target.value);
  };

  const handleSubmitRating = () => {
    console.log("Submitted rating: ", selectedRating);
    if (selectedRating != null) {
      setIsSubmitted(true);
    } else {
      alert("Please select a rating");
    }
  };

  return isSubmitted ? (
    <ThankYou rating={selectedRating} />
  ) : (
    <div className="rating">
      <div className="icon-container">
        <img src={iconStar} alt="Star" />
      </div>
      <div className="text-container">
        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      <div className="rating-form">
        <div className="rating-score">
          <input
            type="button"
            value="1"
            onClick={handleChangeRating}
            className="rating-score-btn"
          ></input>
          <input
            type="button"
            value="2"
            onClick={handleChangeRating}
            className="rating-score-btn"
          ></input>
          <input
            type="button"
            value="3"
            onClick={handleChangeRating}
            className="rating-score-btn"
          ></input>
          <input
            type="button"
            value="4"
            onClick={handleChangeRating}
            className="rating-score-btn"
          ></input>
          <input
            type="button"
            value="5"
            onClick={handleChangeRating}
            className="rating-score-btn"
          ></input>
        </div>
        <button onClick={handleSubmitRating} className="rating-submit-btn">
          SUBMIT
        </button>
      </div>
    </div>
  );
}

export default Rating;
