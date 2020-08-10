import * as yup from "yup";

export const schema = yup.object().shape({
  days: yup.string().label("Days available").required(),
  times: yup.string().label("Times available").required(),
  dayTimes: yup.string().label("Day/times").trim(),
  contact: yup.array().label("Contact").of(yup.string()).max(3).required(),
  feedback: yup.string().label("Feedback").trim(),
});
