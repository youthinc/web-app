import { ErrorMessage, useField } from "formik";
import * as React from "react";
import Select from "react-select";

interface Props {
  name: string;
  label: string;
  options: {
    [val: string]: string;
  };
}

const ReactSelect = ({ name, label, options }: Props) => {
  const [{ value }, , { setValue }] = useField(name);

  return (
    <div className="field">
      <label className="label">{label}</label>

      <div className="control">
        <Select
          options={Object.keys(options).map((value) => ({
            value,
            label: options[value],
          }))}
          onChange={({ value }: any) => {
            setValue(value);
          }}
          value={{
            value,
            label: options[value],
          }}
          styles={{ menu: (styles) => Object.assign(styles, { zIndex: 1000 }) }}
        />
      </div>

      <ErrorMessage name={name} component="p" className="help is-danger" />
    </div>
  );
};

export default ReactSelect;
