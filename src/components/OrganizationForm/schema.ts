import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().label("Name").trim().required(),
  intro: yup.string().label("Intro").trim().required(),
  type: yup.string().label("Type").required(),
  sector: yup.array().label("Sector").of(yup.string()).min(1).max(3).required(),
  country: yup.string().label("Country").required(),
  year: yup.number().label("Year").max(2020).required(),
  location: yup.string().label("Location").required(),
  employees: yup.string().label("Employees").required(),
  ceo: yup.string().label("This").trim().required(),
  title: yup.string().label("This").trim().required(),
  address: yup.string().label("Address").trim().required(),
  email: yup.string().email().label("Email").trim().required(),
  telephone: yup.string().label("Telephone").trim().required(),
  website: yup.string().label("Website").trim().required(),
});
