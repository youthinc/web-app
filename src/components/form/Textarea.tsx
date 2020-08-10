import { Field } from "formik";
import * as React from "react";
import FieldWrapper from "./FieldWrapper";

interface Props {
  name: string;
  label: string;
}

const Textarea = ({ name, label }: Props) => {
  return (
    <FieldWrapper name={name} label={label}>
      <Field name={name} className="textarea" as="textarea" />
    </FieldWrapper>
  );
};

export default Textarea;
