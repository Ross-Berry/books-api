import { FaMoon } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header">
      <h3>What would you like to read today?</h3>
      <p className="dark-mode">
        <FaMoon style={{ color: "#ccc", marginRight: "5px" }} />
        Dark Mode
      </p>
    </div>
  );
};

export default Header;
