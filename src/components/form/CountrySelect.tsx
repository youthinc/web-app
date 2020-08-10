import { countryValues } from "constants/countryValues";
import { ErrorMessage, useField } from "formik";
import { getCountryName } from "helpers/util";
import * as React from "react";
import Select from "react-select";

interface Props {
  name: string;
  label?: string;
}

const CountrySelect = ({ name, label = "Country" }: Props) => {
  const [{ value }, , { setValue }] = useField(name);

  return (
    <div className="field">
      <label className="label">{label}</label>

      <div className="control">
        <Select
          options={countryValues.map((value) => ({
            value,
            label: getCountryName(value),
          }))}
          onChange={({ value }: any) => {
            setValue(value);
          }}
          value={{
            value,
            label: getCountryName(value),
          }}
          styles={{ menu: (styles) => Object.assign(styles, { zIndex: 1000 }) }}
        />
      </div>

      <ErrorMessage name={name} component="p" className="help is-danger" />
    </div>
  );
};

export default CountrySelect;
