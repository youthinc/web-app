import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cn from "classnames";
import { useFormikContext } from "formik";
import * as React from "react";

interface Props {
  onSkip: () => void;
  next: string;
}

const Buttons = ({ onSkip, next }: Props) => {
  const { isSubmitting, isValid, submitCount } = useFormikContext();

  return (
    <div className="field">
      <div className="control">
        <div className="level">
          <div className="level-item">
            <button className="button is-light" onClick={onSkip} type="button">
              Skip
            </button>
          </div>

          <div className="level-item">
            <button
              className={cn(
                "button is-link is-light",
                isSubmitting && "is-loading"
              )}
              type="submit"
            >
              <span>{next}</span>
              <span className="icon">
                <FontAwesomeIcon icon="arrow-right" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {submitCount > 0 && !isValid && (
        <p className="help is-danger">
          Please fix validation errors above. Or you may skip this section and
          fill out later.
        </p>
      )}
    </div>
  );
};

export default Buttons;
