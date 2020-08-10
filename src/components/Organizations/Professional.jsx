import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fs } from "lib/firebase";
import React from "react";
import { useDocumentDataOnce } from "react-firebase-hooks/firestore";

const Professional = ({ id }) => {
  const [data, loading, error] = useDocumentDataOnce(
    fs.doc(`professional/${id}`)
  );

  if (loading || error) return null;

  const { title, schoolOrg } = data;

  return (
    <>
      <FontAwesomeIcon icon="briefcase" color="grey" /> {title} at {schoolOrg}
    </>
  );
};

export default Professional;
