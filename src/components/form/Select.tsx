import { Field } from "formik";
import * as React from "react";
import FieldWrapper from "./FieldWrapper";

interface Props {
  name: string;
  label: string;
  options: {
    [key: string]: string;
  };
}

const Select = ({ name, label, options }: Props) => {
  return (
    <FieldWrapper name={name} label={label}>
      <div className="select">
        <Field name={name} as="select">
          <option value=""></option>
          {Object.keys(options).map((key) => (
            <option key={key} value={key}>
              {options[key]}
            </option>
          ))}
        </Field>
      </div>
    </FieldWrapper>
  );
};

export default Select;
