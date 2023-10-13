import React from "react";
import classes from "./Card.module.scss";
import BGQuotation from "../../images/bg-pattern-quotation.svg";

const Card = (props) => {
  return (
    <div className={`${classes.card} ${classes[props.className]}`}>
      {props.index === 0 && (
        <img
          src={BGQuotation}
          alt="Quotation backgroud"
          className={classes.card__bg}
        />
      )}
      <div className={classes.card__row}>
        <img src={props.image} alt={props.name} className={classes.card__image}/>
        <div className={classes.card__column}>
          <h3 className={classes.card__name}>{props.name}</h3>
          <p className={classes.card__status}>Verified graduate</p>
        </div>
      </div>
      <h1 className={classes.card__heading}>{props.title}</h1>
      <p className={classes.card__text}>{props.text}</p>
    </div>
  );
};

export default Card;
