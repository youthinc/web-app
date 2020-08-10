import * as yup from "yup";
import { ServerValues } from "./types";

export const schema = yup.object().shape<ServerValues>({
  firstName: yup.string().label("First name").trim().required(),
  lastName: yup.string().label("Last name").trim().required(),
  phone: yup.string().label("Phone").trim().required(),
  social: yup.string().label("Social ID").trim().required(),
  country: yup.string().label("Country").required(),
  gender: yup.string().label("Gender").required(),
  ageRange: yup.string().label("Age range").required(),
  nationalId: yup.string().trim(),
  bio: yup.string().label("Full bio").required(),
});
