import { countries } from "countries-list";

export const getCountryName = (value: string) => {
  return (countries as any)[value].name;
};
