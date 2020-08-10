import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cn from "classnames";
import { fs } from "lib/firebase";
import sortBy from "lodash/sortBy";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

const Cards = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fs.collection("calendarData")
      .get()
      .then((snap) => {
        setData(snap.docs || []);
      });
  }, []);

  if (!data) return null;

  const renderCard = ({ day, title, content = null, free }, key) => {
    return (
      <div className="box" key={key}>
        <div className="media">
          <div className="media-left">
            <div className={cn("is-size-4", styles.cardDay)}>
              Aug
              <br />
              {day}
            </div>
          </div>
          <div className="media-content">
            <div className="is-size-4">{title}</div>
            {content}
          </div>
          <div className="media-right">
            <div className="field is-grouped is-grouped-right">
              <div className="control">
                <button className="button is-link">Register</button>
              </div>
              <div className="control">
                <button className="button is-link is-light">
                  <span>Details</span>
                  <span className="icon">
                    <FontAwesomeIcon icon="arrow-right" />
                  </span>
                </button>
              </div>
            </div>
            <p className="help has-text-right">
              {free
                ? "Included in your package for free"
                : "You need to buy it separately"}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return <div>{sortBy(data, "day").map((obj, i) => renderCard(obj, i))}</div>;
};

export default Cards;
