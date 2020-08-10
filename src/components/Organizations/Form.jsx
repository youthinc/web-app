import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cn from "classnames";
import React from "react";

const Form = ({ current, send }) => {
  const { name, type } = current.context.query;

  const changeName = (e) => {
    send({
      type: "CHANGE",
      name: "name",
      value: e.target.value.trim(),
    });
  };

  const renderButton = (value, text) => {
    return (
      <button
        className={cn("button is-rounded", type === value && "is-link")}
        onClick={() => send({ type: "CHANGE", name: "type", value })}
      >
        {text}
      </button>
    );
  };

  return (
    <>
      <div className="field has-addons has-addons-centered">
        <div
          className={cn(
            "control has-icons-left is-expanded",
            current.matches("fetch.first") && "is-loading"
          )}
        >
          <input
            className="input is-fullwidth"
            type="text"
            value={name}
            onChange={changeName}
            placeholder="Search organization by name..."
          />

          <span className="icon is-left">
            <FontAwesomeIcon icon="search" />
          </span>
        </div>
      </div>

      <div className="buttons is-centered">
        <button className="button is-white">Filter by type:</button>
        {renderButton("a", "Business")}
        {renderButton("c", "Government")}
        {renderButton("h", "NGOs")}
        {renderButton("j", "Universities")}
      </div>
    </>
  );
};

export default Form;
