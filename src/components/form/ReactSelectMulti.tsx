import { ErrorMessage, useField } from "formik";
import uniq from "lodash/uniq";
import without from "lodash/without";
import * as React from "react";
import Select from "react-select";

interface Props {
  name: string;
  label: string;
  options: {
    [val: string]: string;
  };
}

const ReactSelectMulti = ({ name, label, options }: Props) => {
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
          onChange={(obj: any) => {
            setValue(uniq([...value, obj.value]));
          }}
          value={{ label: "Select...", value: "" }}
          styles={{ menu: (styles) => Object.assign(styles, { zIndex: 1000 }) }}
        />

        {value.map((val: any) => (
          <div key={val} className="mt-2">
            <button
              className="delete"
              onClick={() => {
                setValue(without(value, val));
              }}
            />{" "}
            {options[val]}
          </div>
        ))}
      </div>

      <ErrorMessage name={name} component="p" className="help is-danger" />
    </div>
  );
};

export default ReactSelectMulti;
