import React from "react";
import { NavLink } from "react-router-dom";

function Head()
{
    return(
        <>
        <nav className="navbar navbar-expand-md bg-dark navbar-dark ">
 
      <NavLink to="/"><img src="https://aether.co.in/wp-content/themes/aether/dist/images/logo_login.png" width="200px" height="90px" alt="Logo"  className="navbar-brand pl-5 pr-5"/></NavLink>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>

          
          <div className="collapse navbar-collapse" id="collapsibleNavbar" >
            <ul className="navbar-nav">
              <li className="nav-item">
              <form className="form-inline" action="/action_page.php">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fa fa-search"></i></span>
                  </div>
                  <input type="text" className="form-control" placeholder="Search"/>
                </div>
                <button type="button" className="btn btn-info" width="100px" height="100px" >Search</button>
              </form>
              </li>
              <li className="nav-item">
                <a className="nav-link pl-5 pr-5" href="#">Orders</a>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link pl-5 pr-4" to="/sign">Signin</NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link pl-5 pr-4" href="#">|</a>
              </li>
              <li className="nav=item">
                <a className="nav-link pl-5 pr-5" href="#"><i className="fa fa-shopping-cart" aria-hidden="true"></i> Add to Cart</a>
              </li>
            </ul>
          </div>
        </nav>
        </>
    );
}

export default Head;