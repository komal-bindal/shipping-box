import "./index.css";

const Button = ({ label, type, disabled, onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`button ${disabled ? "disabled" : ""}`}
    >
      <div>{label}</div>
    </button>
  );
};

export default Button;
