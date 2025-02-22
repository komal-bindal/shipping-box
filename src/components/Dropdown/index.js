import React, { useState, useEffect } from "react";
import "./index.css";

const Dropdown = ({
  attribute,
  label,
  defaultOption,
  formError,
  options,
  value,
  onChange,
}) => {
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  useEffect(() => {
    if (value !== selectedOption) setSelectedOption(value || defaultOption);
  }, [value]);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    onChange(attribute, event.target.value);
  };

  return (
    <div className="dropdown">
      <div className="label-section">
        <label className="label" htmlFor={attribute}>
          {label}
        </label>
        <span className="form-error">
          {formError ? `( ${formError} )` : ""}
        </span>
      </div>
      <select
        className="input"
        id={attribute}
        value={selectedOption}
        onChange={handleChange}
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
