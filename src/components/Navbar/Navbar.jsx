import "./Navbar.css";
import logo from "../../assets/Nexuses_logo_0_002.webp";
import { Link } from "react-router-dom";
import { useState } from "react";
import { HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const routes = [
    {
      title: "Explore",
      link: "/",
    },
    {
      title: "My Doctors",
      link: "/doctors",
    },
    {
      title: "My Medical History",
      link: "/med-history",
    },
  ];
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="navbar-container">
      <img src={logo} alt="logo" style={{ width: 100, height: 38 }} />
      <ul
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          textDecoration: "none",
          width: "40%",
          fontSize: 20,
          fontWeight: 700,
          listStyleType: "none",
        }}
        className="links-container"
      >
        {routes.map((route) => (
          <li>
            <Link
              to={route.link}
              style={{ textDecoration: "none", color: "#3684B0" }}
            >
              {route.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className="navbar-menu">
        <GiHamburgerMenu
          style={{ color: "#3684B0", fontSize: 25 }}
          onClick={() => setToggle(true)}
        />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <HiX
              style={{
                color: "#fff",
                backgroundColor: "#3684B0",
                borderRadius: "50%",
                padding: 5,
                fontSize: 25,
              }}
              onClick={() => setToggle(false)}
            />
            <ul>
              {routes.map((route) => (
                <li key={route.title}>
                  <Link to={route.link} onClick={() => setToggle(false)}>
                    {route.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
