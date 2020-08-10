import React, { useState } from "react";
import Calendar from "./Calendar";
import Cards from "./Cards";
import { printType } from "./printType";

const Events = () => {
  const [type, setType] = useState("primary");

  const renderButton = (t) => {
    return (
      <button className="button" onClick={() => setType(t)}>
        {printType(t)}
      </button>
    );
  };

  return (
    <div style={{ minHeight: 1000 }}>
      <hr />

      <div className="buttons is-centered">
        <span>Browse activities by category:</span>
        <button className="button is-link">All</button>
        {renderButton("primary")}
        {renderButton("info")}
        {renderButton("success")}
        {renderButton("warning")}
        {renderButton("danger")}
      </div>

      <div className="columns">
        <div className="column is-narrow">
          <Calendar type={type} days={[]} />
        </div>
        <div className="column">
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default Events;
