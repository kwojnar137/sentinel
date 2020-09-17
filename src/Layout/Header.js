import React from "react";
import Logo from "./Logo";
import Link from "../components/Link";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div className="header">
      <Logo />
      <div className="links">
        <Link to="/" active={location.pathname === "/"}>
          Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Header;
