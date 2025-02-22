import React, { useEffect, useState } from "react";
import "./index.css";

const TextBox = ({
  attribute,
  label,
  formError,
  placeholder,
  type,
  value,
  onChange,
}) => {
  const [currentValue, setCurrentValue] = useState("");

  const handleChange = (event) => {
    setCurrentValue(event.target.value);
    onChange(attribute, event.target.value);
  };

  useEffect(() => {
    if (value !== currentValue) setCurrentValue(value ?? "");
  }, [value]);

  return (
    <div className="text-box">
      <div className="label-section">
        <label className="label" htmlFor={attribute}>
          {label}
        </label>
        <span className="form-error">
          {formError ? `( ${formError} )` : ""}
        </span>{" "}
      </div>
      <input
        className="input"
        type={type}
        id={attribute}
        name={attribute}
        value={currentValue}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

export default TextBox;
