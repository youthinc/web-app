const obj = {
  primary: "Assessment",
  info: "Events",
  success: "Training",
  warning: "Study Tour",
  danger: "Networking",
};

export const printType = (type) => {
  return obj[type];
};
