import React from "react";
import doctor from "../../assets/depositphotos_253374286-stock-illustration-vector-illustration-male-doctor-avatar.webp";
import { IoStar } from "react-icons/io5";

const DoctorCard = ({ name, location }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: 14,
        width: 300,
        background:
          "linear-gradient(to bottom, #1F4E79 0%, #1F4E79 50%, #282D39 50%, #282D39 100%)",
        height: 330,
        padding: 12,
      }}
    >
      <img
        src={doctor}
        style={{ width: 170, height: 140, borderRadius: 85 }}
        alt="doctor"
      />
      <div
        style={{
          marginTop: 20,
          display: "flex",
          flexDirection: "column",
          gap: 15,
          height: 200,
        }}
      >
        <h2 style={{ color: "#fff" }}>{name}</h2>
        <div
          style={{
            display: "flex",
            gap: 5,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IoStar style={{ color: "#ECD508", width: 27, height: 26 }} />
          <IoStar style={{ color: "#ECD508", width: 27, height: 26 }} />
          <IoStar style={{ color: "#ECD508", width: 27, height: 26 }} />
          <IoStar style={{ color: "#ECD508", width: 27, height: 26 }} />
          <IoStar style={{ color: "#D9D9D9", width: 27, height: 26 }} />
        </div>
        <h2
          style={{
            color: "#3684B0",
            fontSize: "18",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
          }}
        >
          {location}
        </h2>
      </div>
    </div>
  );
};

export default DoctorCard;
