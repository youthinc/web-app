import { ErrorMessage } from "formik";
import * as React from "react";

interface Props {
  name: string;
  label: string;
  children: React.ReactNode;
}

const FieldWrapper = ({ name, label, children }: Props) => {
  return (
    <div className="field">
      <label className="label">{label}</label>

      <div className="control">{children}</div>

      <ErrorMessage name={name} component="p" className="help is-danger" />
    </div>
  );
};

export default FieldWrapper;
