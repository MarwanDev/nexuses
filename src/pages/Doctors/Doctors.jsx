import { Header, DoctorCard } from "../../components";
import "./Doctors.css";

const doctors = [
  {
    name: "Dr. John Doe",
    location: "Cairo, Egypt",
  },
  {
    name: "Dr. John Doe",
    location: "Cairo, Egypt",
  },
  {
    name: "Dr. John Doe",
    location: "Cairo, Egypt",
  },
  {
    name: "Dr. John Doe",
    location: "Cairo, Egypt",
  },
  {
    name: "Dr. John Doe",
    location: "Cairo, Egypt",
  },
  {
    name: "Dr. John Doe",
    location: "Cairo, Egypt",
  },
  {
    name: "Dr. John Doe",
    location: "Cairo, Egypt",
  },
  {
    name: "Dr. John Doe",
    location: "Cairo, Egypt",
  },
];

const Doctors = () => {
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
      <div className="doctors-container">
        {doctors.map((doctor) => (
          <DoctorCard name={doctor.name} location={doctor.location} />
        ))}
      </div>
    </div>
  );
};

export default Doctors;
