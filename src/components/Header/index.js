import "./index.css";

const Header = ({ activeTab, onTabChange }) => {
  return (
    <div className="header">
      <h1 className="heading">Shipping Box</h1>
      <div className="tab-panel">
        <div
          className={`tab ${activeTab === "add" ? "active" : ""}`}
          onClick={() => onTabChange("add")}
        >
          Add Shipping
        </div>
        <div
          className={`tab ${activeTab === "view" ? "active" : ""}`}
          onClick={() => onTabChange("view")}
        >
          View Shipping
        </div>
      </div>
    </div>
  );
};

export default Header;
