import { useProfileCtx } from "providers/ProfileProvider";
import * as React from "react";

const BasicInfo = () => {
  const { personal } = useProfileCtx();

  if (!personal) return null;

  const { firstName, lastName } = personal;

  return (
    <h1 className="title has-text-centered mt-5">
      {firstName} {lastName}
    </h1>
  );
};

export default BasicInfo;
