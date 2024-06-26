import { useState } from "react";
import Logo from "../assets/powerSlap.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt=""/>
        <div className="hiddenLinks">
          <Link to="/">  </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">  </Link>
      
        <button onClick={toggleNavbar}>
          
        </button>
      </div>
    </div>
  );
}

export default Navbar;