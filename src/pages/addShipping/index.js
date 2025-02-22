import { useState } from "react";
import { useDispatch } from "react-redux";

import Button from "../../components/Button";
import ColorPicker from "../../components/ColorPicker";
import Dropdown from "../../components/Dropdown";
import TextBox from "../../components/TextBox";
import { addShipping } from "../../store/modules/shipping";
import "./index.css";
import { checkIsFormValid, validateForm } from "./helpers";

const AddShipping = (props) => {
  const dispatch = useDispatch();
  const [formErrors, setFormErrors] = useState({});
  const [isDataSaved, setDataSaved] = useState(false);
  const [formData, setFormData] = useState({
    receiverName: "",
    weight: "",
    destinationCountry: "Sweden (7.35 INR)",
    boxColor: "rgb(255, 255, 255)",
  });
  const [touched, setTouched] = useState({
    receiverName: false,
    weight: false,
    destinationCountry: false,
    boxColor: false,
  });

  const isFormValid = checkIsFormValid(formErrors, touched);

  const handleChange = (attribute, value) => {
    setFormData((prevData) => ({ ...prevData, [attribute]: value }));
    setTouched((prev) => ({ ...prev, [attribute]: true }));
    const error = validateForm(attribute, value);
    setFormErrors((prev) => ({ ...prev, [attribute]: error }));
    setDataSaved(false);
  };

  const handleSave = (e) => {
    e.preventDefault();
    const errors = {};
    Object.keys(formData).forEach((attribute) => {
      errors[attribute] = validateForm(attribute, formData[attribute]);
    });
    setFormErrors(errors);

    if (isFormValid) {
      dispatch(addShipping(formData));
      setFormData({});
      setFormErrors({});
      setDataSaved(true);
    }
  };

  return (
    <div className="add-form">
      <div className="save-tag">{isDataSaved ? "Data Saved!!!" : ""}</div>
      <form className="form-body" onSubmit={handleSave}>
        <div className="form-row">
          <div className="form-input">
            <TextBox
              attribute="receiverName"
              label="Receiver Name"
              placeholder="Enter name"
              type="text"
              onChange={handleChange}
              value={formData.receiverName}
              formError={touched.receiverName && formErrors.receiverName}
            />
          </div>
          <div className="form-input">
            <TextBox
              attribute="weight"
              label="Weight (in kgs)"
              placeholder="Enter weight"
              type="number"
              value={formData.weight}
              formError={touched.weight && formErrors.weight}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-input">
            <Dropdown
              attribute="destinationCountry"
              label="Destination Country"
              defaultOption="Sweden (7.35 INR)"
              options={[
                "Sweden (7.35 INR)",
                "China (11.53 INR)",
                "Brazil (15.63 INR)",
                "Australia (50.09 INR)",
              ]}
              value={formData.destinationCountry}
              formError={
                touched.destinationCountry && formErrors.destinationCountry
              }
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-input">
            <ColorPicker
              attribute="boxColor"
              label="Box Color"
              formError={touched.boxColor && formErrors.boxColor}
              onChange={handleChange}
            />
          </div>
        </div>
      </form>
      <div className="form-footer">
        <Button
          type="submit"
          label="Save"
          onClick={handleSave}
          disabled={!isFormValid}
        ></Button>
      </div>
    </div>
  );
};
export default AddShipping;
