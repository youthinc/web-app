import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cn from "classnames";
import {
  activities,
  field,
  hardSkills,
  interests,
  softSkills,
} from "constants/individual";
import without from "lodash/without";
import React, { useState } from "react";

const filters = [
  "role",
  "education",
  "field",
  "interests",
  "activities",
  "softSkills",
  "hardSkills",
];

const Form = ({ current, send }) => {
  const { name } = current.context.query;
  const [filter, setFilter] = useState("role");

  const changeName = (e) => {
    send({
      type: "CHANGE",
      name: "name",
      value: e.target.value.trim(),
    });
  };

  const renderButton = (name, value, text) => {
    return (
      <button
        className={cn(
          "button is-rounded is-small",
          current.context.query[name] === value && "is-link"
        )}
        key={value}
        onClick={() => {
          without(filters, name).forEach((n) => {
            send({ type: "CHANGE", name: n, value: "" });
          });
          send({ type: "CHANGE", name, value });
        }}
      >
        {text}
      </button>
    );
  };

  const renderRoles = () => {
    if (filter !== "role") return null;
    return (
      <>
        {renderButton("role", "", "All")}
        {renderButton("role", "a", "Coach")}
        {renderButton("role", "e", "Mentor")}
        {renderButton("role", "c", "Trainer")}
        {renderButton("role", "g", "Volunteer")}
      </>
    );
  };

  const renderEducation = () => {
    if (filter !== "education") return null;
    return (
      <>
        {renderButton("education", "", "All")}
        {renderButton("education", "a", "Secondary school")}
        {renderButton("education", "b", "High school")}
        {renderButton("education", "c", "TVET")}
        {renderButton("education", "d", "Associate degree")}
        {renderButton("education", "e", "Bachelor's degree")}
        {renderButton("education", "f", "Master's degree")}
        {renderButton("education", "g", "Doctoral degree")}
      </>
    );
  };

  const renderField = () => {
    if (filter !== "field") return null;
    return (
      <>
        {renderButton("field", "", "All")}
        {Object.keys(field).map((f) => renderButton("field", f, field[f]))}
      </>
    );
  };

  const renderInterests = () => {
    if (filter !== "interests") return null;
    return (
      <>
        {renderButton("interests", "", "All")}
        {Object.keys(interests).map((f) =>
          renderButton("interests", f, interests[f])
        )}
      </>
    );
  };

  const renderActivities = () => {
    if (filter !== "activities") return null;
    return (
      <>
        {renderButton("activities", "", "All")}
        {Object.keys(activities).map((f) =>
          renderButton("activities", f, activities[f])
        )}
      </>
    );
  };

  const renderSoftSkills = () => {
    if (filter !== "softSkills") return null;
    return (
      <>
        {renderButton("softSkills", "", "All")}
        {Object.keys(softSkills).map((f) =>
          renderButton("softSkills", f, softSkills[f])
        )}
      </>
    );
  };

  const renderHardSkills = () => {
    if (filter !== "hardSkills") return null;
    return (
      <>
        {renderButton("hardSkills", "", "All")}
        {Object.keys(hardSkills).map((f) =>
          renderButton("hardSkills", f, hardSkills[f])
        )}
      </>
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
            placeholder="Search by name..."
          />

          <span className="icon is-left">
            <FontAwesomeIcon icon="search" />
          </span>
        </div>
      </div>

      <div className="buttons is-centered">
        <div className="select mx-1 mb-2 is-small">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            style={{ fontFamily: "Roboto Condensed" }}
          >
            <option value="role">Filter by role</option>
            <option value="education">Filter by education</option>
            <option value="field">Filter by field</option>
            <option value="interests">Filter by interests</option>
            <option value="activities">Filter by activities</option>
            <option value="softSkills">Filter by soft skills</option>
            <option value="hardSkills">Filter by hard skills</option>
          </select>
        </div>

        {renderRoles()}
        {renderEducation()}
        {renderField()}
        {renderInterests()}
        {renderActivities()}
        {renderSoftSkills()}
        {renderHardSkills()}
      </div>
    </>
  );
};

export default Form;
