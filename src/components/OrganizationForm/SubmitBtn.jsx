import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cn from "classnames";
import { useFormikContext } from "formik";
import React from "react";

const SubmitBtn = () => {
  const { isSubmitting } = useFormikContext();

  return (
    <div className="field">
      <div className="control">
        <button
          className={cn("button is-link", isSubmitting && "is-loading")}
          type="submit"
        >
          <span className="icon">
            <FontAwesomeIcon icon="check" />
          </span>
          <span>Submit</span>
        </button>
      </div>
    </div>
  );
};

export default SubmitBtn;
