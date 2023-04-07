import React from "react";
import thankYouImg from "../assets/illustration-thank-you.svg";
import "./ThankYou.css";

function ThankYou(props) {
  return (
    <div className="thank-you">
      <img src={thankYouImg} alt="Thank You" />
      <div className="selected-rating">
        You selected {props.rating} out of 5
      </div>
      <div className="thank-you-text">
        <h1>Thank You!</h1>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    </div>
  );
}

export default ThankYou;
