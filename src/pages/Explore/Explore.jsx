import { Header, DoctorSlider } from "../../components";

const Explore = () => {
  return (
    <div style={{ padding: "4rem 15px" }}>
      <Header />
      <DoctorSlider speciality={"Dermatology"} />
      <DoctorSlider speciality={"Psychiatry"} />
      <DoctorSlider speciality={"Pediatrics"} />
    </div>
  );
};

export default Explore;
