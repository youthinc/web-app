import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import p1 from "assets/p1.PNG";
import p10 from "assets/p10.PNG";
import p2 from "assets/p2.PNG";
import p3 from "assets/p3.PNG";
import p4 from "assets/p4.PNG";
import p5 from "assets/p5.PNG";
import p6 from "assets/p6.PNG";
import p7 from "assets/p7.PNG";
import p8 from "assets/p8.PNG";
import p9 from "assets/p9.PNG";
import {
  activities,
  days,
  education,
  field,
  hardSkills,
  interests,
  occupation,
  roles,
  softSkills,
  times,
} from "constants/individual";
import React from "react";

const images = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10];

const Row = ({ data, i }) => {
  const {
    personal,
    interests: interestsObj,
    professional,
    skills,
    availability,
  } = data;
  const { firstName, lastName, phone, email } = personal;

  return (
    <tr>
      <td>
        <figure className="image is-64x64">
          <img className="is-rounded" src={images[i]} alt="profile" />
        </figure>
      </td>
      <td>
        <div className="is-size-5 has-text-weight-bold mb-2">
          {firstName} {lastName}
        </div>
        <br />
        <FontAwesomeIcon icon="briefcase" color="grey" fixedWidth />{" "}
        {professional.schoolOrg}
        <br />
        <FontAwesomeIcon icon="phone" color="grey" fixedWidth /> {phone}
        <br />
        <FontAwesomeIcon icon="envelope" color="grey" fixedWidth /> {email}
      </td>
      <td>
        Education:{" "}
        <span className="has-text-weight-light">
          {education[professional.education]}
        </span>
        <br />
        Field:{" "}
        <span className="has-text-weight-light">
          {field[professional.field]}
        </span>
        <br />
        Occupation:{" "}
        <span className="has-text-weight-light">
          {occupation[professional.occupation]}
        </span>
        <br />
        Interests:{" "}
        <span className="has-text-weight-light">
          {interests[interestsObj.interests]}
        </span>
        <br />
        Roles:{" "}
        {interestsObj.roles.map((r) => (
          <span key={r} className="tag is-success is-light mr-2 mb-1">
            {roles[r].role.split("-")[0]}
          </span>
        ))}
        <br />
        Activities:{" "}
        {interestsObj.activities.map((a) => (
          <span key={a} className="tag is-warning is-light mr-2 mb-1">
            {activities[a]}
          </span>
        ))}
        <br />
        Soft skills:{" "}
        {skills.softSkills.map((s) => (
          <span key={s} className="tag is-info is-light mr-2 mb-1">
            {softSkills[s]}
          </span>
        ))}
        <br />
        Hard skills:{" "}
        {skills.hardSkills.map((s) => (
          <span key={s} className="tag is-danger is-light mr-2 mb-1">
            {hardSkills[s]}
          </span>
        ))}
        <br />
        Available days:{" "}
        <span className="has-text-weight-light">{days[availability.days]}</span>
        <br />
        Available times:{" "}
        <span className="has-text-weight-light">
          {times[availability.times]}
        </span>
      </td>
    </tr>
  );
};

export default Row;
