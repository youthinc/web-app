import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import grid1 from "assets/grid1.jpg";
import grid2 from "assets/grid2.jpg";
import personalPoster from "assets/personal_poster.png";
import professionalPoster from "assets/professional_poster.png";
import cn from "classnames";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

// const selectPackage = functions.httpsCallable("selectPackage");

const personalHeaders = ["BFIT COMMUNITY", "HEALTH & WELLNESS"];

const professionalHeaders = ["L&D HUB COMMUNITY", "WORK & COMPETENCE"];

const personalItems = [
  "Mind - Mental Health",
  "Body - Physical Exercise",
  "Spirit - Spirituality",
  "Nutrition - Healthy Eating",
  "Community - Relationship",
  "Mindfulness",
  "Motivation",
];

const professionalItems = [
  "Stakeholder Mapping",
  "Digital Skills Matching",
  "Soft Skills Training",
  "Internship",
  "Mentorship",
  "Networking",
  "Study Tours",
];

const Packages = ({ onDone }) => {
  const [personalSelected, setPersonalSelected] = useState(false);
  const [professionalSelected, setProfessionalSelected] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const handleSubmit = () => {
    if (!personalSelected && !professionalSelected) {
      setError("Please select a package.");
    } else {
      // selectPackage({
      //   personal: personalSelected,
      //   professional: professionalSelected,
      // });
      setDone(true);
      onDone();
    }
  };

  if (done) {
    if (dismissed) {
      return null;
    }
    return (
      <div className="message is-success is-large">
        <div className="message-header">
          <p>Success</p>
          <button
            className="delete"
            onClick={() => setDismissed(true)}
          ></button>
        </div>
        <div className="message-body">
          Thank you for joining us! We'll contact you via your preferred method
          soon. In the meantime please complete your profile{" "}
          <Link to="/profile-personal">here</Link> if you haven't already.
        </div>
      </div>
    );
  }

  const renderColumn = (
    headers,
    selected,
    text,
    items,
    icon,
    poster,
    onClick
  ) => (
    <div className="column">
      <div
        className={cn(styles.wrapper, selected && styles.selected)}
        onClick={() => {
          setError("");
          onClick();
        }}
      >
        <div className="columns is-mobile">
          <div className={cn("column is-narrow", styles.vcenter)}>
            <FontAwesomeIcon
              icon={
                selected
                  ? "check-circle"
                  : { iconName: "circle", prefix: "far" }
              }
              size="2x"
              color={selected ? "green" : "#eee"}
            />
          </div>
          <div className="column pl-0">
            {headers.map((h) => (
              <h1
                key={h}
                className={cn(
                  "subtitle mb-0",
                  selected && "has-text-weight-bold"
                )}
              >
                {h}
              </h1>
            ))}
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <div className="pl-4 pb-2">{text}</div>
            {items.map((item) => (
              <div key={item} className="pl-4">
                &bull; {item}
              </div>
            ))}
          </div>

          <div className={cn("column is-narrow", styles.vcenter)}>
            <figure className="image is-128x128">
              <img alt="grid" src={icon} />
            </figure>
          </div>
        </div>

        <div style={{ width: 256, margin: "0 auto" }}>
          <figure className="image is-square">
            <img src={poster} alt="_poster" />
          </figure>
        </div>
      </div>
    </div>
  );

  return (
    <div className="my-6">
      <h1 className="title has-text-centered">
        Choose a Membership Community - Service Package:
      </h1>
      <h2 className="subtitle has-text-centered">
        Select either personal or professional package, or both.
      </h2>

      <div className="columns">
        {renderColumn(
          personalHeaders,
          personalSelected,
          "BHealthy - BStrong - BYou - BFit",
          personalItems,
          grid1,
          personalPoster,
          () => setPersonalSelected((v) => !v)
        )}
        {renderColumn(
          professionalHeaders,
          professionalSelected,
          "Bridging the Competence Gap",
          professionalItems,
          grid2,
          professionalPoster,
          () => setProfessionalSelected((v) => !v)
        )}
      </div>

      <button
        className="button is-large is-success is-outlined is-fullwidth"
        onClick={handleSubmit}
      >
        <span className="icon">
          <FontAwesomeIcon icon="arrow-right" />
        </span>

        <span>Proceed</span>
      </button>

      {!!error && <p className="help is-danger">{error}</p>}
    </div>
  );
};

export default Packages;
