import React from "react";
import { FaCheck } from "react-icons/fa";

const Table = () => {
  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>Doctor</th>
            <th>Date</th>
            <th>Speciality</th>
            <th>Follow Up Needed</th>
            <th>New Perscription(s)</th>
            <th>New Check(s) Needed</th>
          </tr>
        </thead>
        <tbody>
          <tr
            style={{
              backgroundColor: "#fff",
              borderBottom: "24px solid #E9E2E2",
            }}
          >
            <td>
              <div
                style={{
                  display: "flex",
                  gap: 16,
                  width: "14rem",
                  textDecoration: "none",
                }}
              >
                <div
                  style={{
                    height: 50,
                    width: 50,
                    backgroundColor: "#3684B0",
                    borderRadius: "50%",
                  }}
                ></div>
                <h3
                  style={{
                    fontWeight: 500,
                    margin: "auto",
                    fontSize: 18,
                  }}
                >
                  John Doe
                </h3>
              </div>
            </td>
            <td>20/4/2024</td>
            <td>Psychiatrist</td>
            <td style={{ textAlign: "center" }}>
              <FaCheck />
            </td>
            <td style={{ textAlign: "center" }}>
              <FaCheck />
            </td>
            <td style={{ textAlign: "center" }}>
              <FaCheck />
            </td>
          </tr>

          <tr
            style={{
              backgroundColor: "#fff",
              borderBottom: "24px solid #E9E2E2",
            }}
          >
            <td>
              <div
                style={{
                  display: "flex",
                  gap: 16,
                  width: "14rem",
                  textDecoration: "none",
                }}
              >
                <div
                  style={{
                    height: 50,
                    width: 50,
                    backgroundColor: "#3684B0",
                    borderRadius: "50%",
                  }}
                ></div>
                <h3
                  style={{
                    fontWeight: 500,
                    margin: "auto",
                    fontSize: 18,
                  }}
                >
                  John Doe
                </h3>
              </div>
            </td>
            <td>20/4/2024</td>
            <td>Psychiatrist</td>
            <td style={{ textAlign: "center" }}>
              <FaCheck />
            </td>
            <td style={{ textAlign: "center" }}>
              <FaCheck />
            </td>
            <td style={{ textAlign: "center" }}>
              <FaCheck />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
