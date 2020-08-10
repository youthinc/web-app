import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cn from "classnames";
import { useProfileCtx } from "providers/ProfileProvider";
import * as React from "react";
import { Link, useLocation } from "react-router-dom";

const Progress = () => {
  const {
    personal,
    interests,
    professional,
    skills,
    availability,
  } = useProfileCtx();

  const location = useLocation();

  const renderItem = (name: string, label: string, checked: boolean) => {
    return (
      <div
        className={cn(
          location.pathname.indexOf(name) >= 0 && "has-text-weight-bold"
        )}
      >
        <FontAwesomeIcon
          icon={
            checked ? "check-circle" : { prefix: "far", iconName: "circle" }
          }
          color={checked ? "green" : "grey"}
        />{" "}
        <Link to={`/profile-${name}`}>{label}</Link>
      </div>
    );
  };

  return (
    <div className="notification is-warning is-light">
      {renderItem("personal", "Personal info", !!personal)}
      {renderItem("interests", "Interests", !!interests)}
      {renderItem("professional", "Professional info", !!professional)}
      {renderItem("skills", "Skills", !!skills)}
      {renderItem("availability", "Availability", !!availability)}
    </div>
  );
};

export default Progress;
