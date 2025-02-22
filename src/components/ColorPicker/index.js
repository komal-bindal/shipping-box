import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";
import "./index.css";

const ColorPicker = ({ attribute, label, formError, onChange }) => {
  const [color, setColor] = useState("#ffffff");

  // Convert hex color to RGB format
  const hexToRgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgb(${r}, ${g}, ${b})`;
  };

  const handleChange = (newColor) => {
    setColor(newColor);
    onChange(attribute, hexToRgb(newColor));
  };

  return (
    <div className="color-picker">
      <div className="label-section">
        <label className="label">{label}</label>
        <span className="form-error">
          {formError ? `( ${formError} )` : ""}
        </span>
      </div>
      <HexColorPicker
        className="color-picker-input"
        color={color}
        onChange={handleChange}
      />
    </div>
  );
};

export default ColorPicker;
