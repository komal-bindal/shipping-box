export const checkIsFormValid = (formErrors, touched) => {
  return (
    Object.keys(formErrors).filter((key) => formErrors[key].length > 0)
      ?.length === 0 &&
    touched.receiverName &&
    touched.weight
  );
};

export const validateForm = (attribute, value) => {
  let error = "";
  switch (attribute) {
    case "receiverName":
      if (!value) error = "Receiver Name is required";
      break;
    case "weight":
      if (!value || value <= 0) error = "Weight is required (positive number)";
      break;
    case "destinationCountry":
      if (!value) error = "Destination Country is required";
      break;
    case "boxColor":
      if (!value) error = "Box color is required";
      break;
  }
  return error;
};
