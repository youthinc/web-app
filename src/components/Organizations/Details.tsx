import { ServerValues as Availability } from "components/ProfileForm/Availability/types";
import { ServerValues as Interests } from "components/ProfileForm/Interests/types";
import { ServerValues as Personal } from "components/ProfileForm/Personal/types";
import { ServerValues as Professional } from "components/ProfileForm/Professional/types";
import { ServerValues as Skills } from "components/ProfileForm/Skills/types";
import {
  activities,
  days,
  hardSkills,
  interests,
  roles,
  softSkills,
  times,
} from "constants/individual";
import { fs } from "lib/firebase";
import React from "react";
import { useDocumentDataOnce } from "react-firebase-hooks/firestore";

interface Props {
  id: string;
  onClose: () => void;
}

const Details = ({ id, onClose }: Props) => {
  const [personal] = useDocumentDataOnce<Personal>(fs.doc(`personal/${id}`));
  const [interestsObj] = useDocumentDataOnce<Interests>(
    fs.doc(`interests/${id}`)
  );
  const [professional] = useDocumentDataOnce<Professional>(
    fs.doc(`professional/${id}`)
  );
  const [skillsObj] = useDocumentDataOnce<Skills>(fs.doc(`skills/${id}`));
  const [availabilityObj] = useDocumentDataOnce<Availability>(
    fs.doc(`availability/${id}`)
  );

  if (
    !personal ||
    !interestsObj ||
    !professional ||
    !skillsObj ||
    !availabilityObj
  ) {
    return null;
  }

  const { firstName, lastName } = personal;

  const printVal = (value: string, obj: any): string => {
    return obj[value];
  };

  const printArr = (arr: string[], obj: any) => {
    return (
      <>
        {arr.map((val) => (
          <span key={val}>{printVal(val, obj)},</span>
        ))}
      </>
    );
  };

  return (
    <div className="modal is-active">
      <div className="modal-background" />
      <div className="modal-content">
        <div className="box">
          <h1 className="title">
            {firstName} {lastName}
          </h1>
          <div className="content">
            <ul>
              <li>
                Interests:{" "}
                {printVal(
                  (interestsObj.interests as unknown) as string,
                  interests
                )}
              </li>
              <li>
                Roles:{" "}
                <ul>
                  {interestsObj.roles.map((val) => (
                    <li key={val}>
                      {roles[val].role}: {roles[val].description}
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                Activities: {printArr(interestsObj.activities, activities)}
              </li>
              <li>Soft skills: {printArr(skillsObj.softSkills, softSkills)}</li>
              <li>Hard skills: {printArr(skillsObj.hardSkills, hardSkills)}</li>
              <li>Availabile days: {printVal(availabilityObj.days, days)}</li>
              <li>
                Availabile times:{" "}
                {printVal((availabilityObj.times as unknown) as string, times)}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <button className="modal-close is-large" onClick={onClose}></button>
    </div>
  );
};

export default Details;
