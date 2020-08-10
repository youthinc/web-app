import { countries } from "countries-list";
import sortBy from "lodash/sortBy";

export const countryValues = sortBy(
  Object.keys(countries),
  (str) => (countries as any)[str].name
);
