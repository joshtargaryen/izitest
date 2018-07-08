import React from "react";
import PropTypes from "prop-types";
import "./card.css";

const Card = ({ name, creationDate, img, ...props }) => {
  let { first, middle, last } = name;
  
  // screens against null or undefined middle names that make the cards look ugly.
  middle = !middle === null || !middle === undefined ? middle : " ";

  // converts the date number to a reader friendly month/day/year version.
  creationDate = new Date(creationDate).toLocaleString().split(",")[0];


  return (
    <figure className="effect-julia">
      <img src={img} alt="img" />
      <figcaption>
        <h2>{`${first} ${middle} ${last}`}</h2>
        <div>
          <p>{creationDate}</p>
        </div>
      </figcaption>
    </figure>
  );
};

Card.propTypes = {
  name: PropTypes.object,
  creationDate: PropTypes.number,
  img: PropTypes.string
};

Card.defaultProps = {
  name: { first: " ", middle: " ", last: " " },
  creationDate: "2/12/1990",
  img:
    "https://thumbs.dreamstime.com/b/abstract-grey-watercolor-background-painting-colors-81234227.jpg"
};

export default Card;
