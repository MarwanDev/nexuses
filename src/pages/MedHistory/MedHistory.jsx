import { Header, Table } from "../../components";
import "./MedHistory.css";

const MedHistory = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "4rem 15px",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        gap: 25,
      }}
    >
      <Header />
      <div style={{ display: "flex", flexDirection: "column", padding: 15 }}>
        <h2 style={{ fontSize: "clamp(1.5rem, 35px, 55px)", color: "#9B6FA0" }}>
          My Medical Visits
        </h2>
        <Table />
      </div>
    </div>
  );
};

export default MedHistory;
