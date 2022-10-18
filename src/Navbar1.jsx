import React from "react";
import { NavLink } from "react-router-dom";
function Navbar()
{
    return(
    <>
    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
  
  

  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>

  
  <div className="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
    <ul className="navbar-nav ">
      <li className="nav-item pl-5">
        <NavLink className="nav-link" to="/mobile"><i className="fa fa-mobile"></i> Mobile Phones</NavLink>
      </li>
      <li className="nav-item pl-5">
        <NavLink className="nav-link" to="/tv"><i className="fa fa-television"></i> Televisions</NavLink>
      </li>
      <li className="nav-item pl-5">
        <NavLink className="nav-link" to="/laptop"><i className="fa fa-laptop"></i> Laptops</NavLink>
      </li>
      <li className="nav-item pl-5">
      <NavLink className="nav-link" to="/audio"><i className="fa fa-headphones"></i> Audio</NavLink>
      </li>
      <li className="nav-item pl-5">
      <NavLink className="nav-link" to="/cam"><i className="fa fa-camera"></i> Cameras</NavLink>
      </li>
      <li className="nav-item pl-5">
      <NavLink className="nav-link" to="/game"><i className="fa fa-gamepad"></i> Gaming</NavLink>
      </li>
      
    </ul>
  </div>
</nav>
    </>
    );
}

export default Navbar;