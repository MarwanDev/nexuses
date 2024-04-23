import React from "react";
import Carousel from "react-material-ui-carousel";
import DoctorCard from "../DoctorCard/DoctorCard";

const DoctorSlider = ({speciality}) => {
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
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", padding: 15 }}>
      <h2 style={{ fontSize: "clamp(1.5rem, 35px, 55px)", color: "#9B6FA0" }}>
        {speciality}
      </h2>
      <Carousel
        animation="slide"
        autoPlay={false}
        cycleNavigation
        timeout={300}
      >
        {doctors.map((doctor, i) => (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              rowGap: "4rem",
              padding: "0 22px"
            }}
          >
            <DoctorCard key={i} name={doctor.name} location={doctor.location} />
            <DoctorCard key={i} name={doctor.name} location={doctor.location} />
            <DoctorCard key={i} name={doctor.name} location={doctor.location} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default DoctorSlider;
