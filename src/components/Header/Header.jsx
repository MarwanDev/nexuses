import "./Header.css";
import header from "../../assets/children.png";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#282D39",
        width: "100%",
        marginTop: "1.5rem",
        borderRadius: 20,
        padding: "2.5rem",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <h1 className="health-header">Health is Wealth</h1>
      <img src={header} alt="header" style={{ margin: "auto" }} className="header-img" />
    </div>
  );
};

export default Header;
