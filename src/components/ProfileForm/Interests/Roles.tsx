import { roles } from "constants/individual";
import { ErrorMessage, useField } from "formik";
import uniq from "lodash/uniq";
import without from "lodash/without";
import * as React from "react";
import Select from "react-select";

const getOption = (key: string) => {
  return {
    value: key,
    label: `${roles[key].role}: ${roles[key].description}`,
  };
};

const groupedOptions: {
  label: string;
  options: { value: string; label: string }[];
}[] = [
  {
    label: "Bfit Group (HEALTHY LIFESTYLE - BFIT EVENTS & DEMOS)",
    options: [getOption("a"), getOption("b")],
  },
  {
    label: "Training Group (QUALITY EDUCATION - LIFELONG LEARNING & TRAINING)",
    options: [getOption("c"), getOption("d")],
  },
  {
    label: "Mediation Group (DECENT WORK - EMPLOYABILITY & MEDIATION)",
    options: [getOption("e"), getOption("f")],
  },
  {
    label: "Partnership Group (PARTNERSHIP - DEVELOPMENT PROJECTS)",
    options: [
      getOption("g"),
      getOption("h"),
      getOption("i"),
      getOption("j"),
      getOption("k"),
      getOption("l"),
      getOption("m"),
      getOption("n"),
      getOption("o"),
    ],
  },
];

const Roles = () => {
  const [{ value }, , { setValue }] = useField("roles");

  return (
    <div className="field">
      <label className="label">
        Roles to Get Involved: Please check up to 3 choices that may apply
      </label>

      <div className="control" style={{ zIndex: 100 }}>
        <Select
          options={groupedOptions}
          onChange={(obj: any) => {
            setValue(uniq([...value, obj.value]));
          }}
          value={{ label: "Select...", value: "" } as any}
        />

        {value.map((val: string) => (
          <div key={val} className="mt-2">
            <button
              className="delete"
              onClick={() => {
                setValue(without(value, val));
              }}
            />{" "}
            {roles[val].role}: <small>{roles[val].description}</small>
          </div>
        ))}
      </div>

      <ErrorMessage name="roles" component="p" className="help is-danger" />
    </div>
  );
};

export default Roles;
