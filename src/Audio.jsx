

import React from "react";
import { NavLink } from "react-router-dom";
function Audio()
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
      <NavLink className="nav-link" to="/tv"><i className="fa fa-television"></i>Televisions</NavLink>

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
<div id="demo6" className="carousel slide"  data-ride="carousel">
        <ul className="carousel-indicators">
            <li data-target="#demo6" data-slide-to="0" className="active" ></li>
            <li data-target="#demo6" data-slide-to="1" ></li>
            <li data-target="#demo6" data-slide-to="2"></li>
            
            
        </ul>
        
         
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1640376462/Croma%20Assets/CMS/Brand%20Page%20Banners/2021/jbl/G-_Croma-2021_2865__CP_JBL_Zomato-Voucher_24-Dec_pp3cob.png/mxw_2048,f_auto" alt="cnicm" width="100%"/>
            </div>
            <div className="carousel-item">
              <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1641458415/Croma%20Assets/CMS/Category%20Page%20Banners/CP_AudioDevices_06-Jan_nyxus3.jpg/mxw_2048,f_auto" alt="kdm" width="100%"/>
            </div>
            <div className="carousel-item">
              <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1641458414/Croma%20Assets/CMS/Category%20Page%20Banners/CP_Zebronics_06-Jan_tzghde.jpg/mxw_2048,f_auto" alt="snsnik"  width="100%"/>
            </div>
           
          </div>
        
        
          <a className="carousel-control-prev" href="#demo6" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a className="carousel-control-next" href="#demo6" data-slide="next">
            <span className="carousel-control-next-icon"></span>
          </a>
    
    </div><br/>
    <br/>
    <div className="display-4 text-center">Popular Audio Devices</div><br/>
    <div className="container">  
    <div className="card-deck">
                    <div className="card bg-light">
                        <div className="card-body text-center">
                            <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1640585074/Croma%20Assets/Entertainment/Wireless%20Earbuds/Images/246633_lcm7ys.png/mxw_2048,f_auto" width="200px" height="200px" />
                            <NavLink to="/buy" style={{color:"black"}}><br/>pTron Bassbuds Duo In-Ear Truly Wireless Earbuds with Mic (Bluetooth 5.1, Water Resistant, 140318114, White) <br/>
                            ₹799.00</NavLink>
                        </div>
                    </div>
                    <div className="card bg-light">
                        <div className="card-body text-center">
                            <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1640670901/Croma%20Assets/Entertainment/Wireless%20Earbuds/Images/246499_rnj63a.png/mxw_2048,f_auto" width="200px" height="200px"/>
                            <NavLink to="/buy" style={{color:"black"}}><br/> JBL Wave 100 In-Ear Truly Wireless Earbuds with Mic (Bluetooth 5.0, JBL Deep Bass, JBLW100TWSBLKIN, Black)<br/>
                        ₹3,999.00 </NavLink>
                        </div>
                    </div>
                    <div className="card bg-light">
                        <div className="card-body text-center">
                            <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1640672832/Croma%20Assets/Entertainment/Wireless%20Earbuds/Images/246624_ktwred.png/mxw_2048,f_auto" width="200px" height="200px"/>
                            <NavLink to="/buy" style={{color:"black"}}><br/> Noise Beads In-Ear Truly Wireless Earbuds with Mic (Bluetooth 5.1, Full Touch Control, AUD-HDPHN-BEADS-ST, Grey Silver)<br/>
                        ₹1,799.00</NavLink>

                        </div>
                    </div>
            </div>
            
</div><br/><br/>
<div className="display-4 text-center">#UnleashYourPower</div><br/>
<div className="container">
<div className="card-deck">
                    <div className="card bg-light">
                        <div className="card-body text-center">
                            <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1639745663/Croma%20Assets/Entertainment/Wireless%20Earbuds/Images/246391_kkwcfh.png/mxw_2048,f_auto" width="200px" height="200px" />
                            <NavLink to="/buy" style={{color:"black"}}><br/>boAt Marvel Airdopes 131 In-Ear Truly Wireless Earbuds with Mic (Bluetooth 5.0, Google Assistant and Siri Supported, King's Black)<br/>
                            ₹1,449.00</NavLink>
                        </div>
                    </div>
                    <div className="card bg-light">
                        <div className="card-body text-center">
                            <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1639745664/Croma%20Assets/Entertainment/Wireless%20Earbuds/Images/246390_v459qn.png/mxw_2048,f_auto" width="200px" height="200px"/>
                            <NavLink to="/buy" style={{color:"black"}}><br/>boAt Marvel Airdopes 131 In-Ear Truly Wireless Earbuds with Mic (Bluetooth 5.0, Google Assistant and Siri Supported, Iron Blood)<br/>
                        ₹1,449.00</NavLink>

                        </div>
                    </div>
                    <div className="card bg-light">
                        <div className="card-body text-center">
                            <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1639745662/Croma%20Assets/Entertainment/Wireless%20Earbuds/Images/246389_euxkec.png/mxw_2048,f_auto" width="200px" height="200px"/>
                            <NavLink to="/buy" style={{color:"black"}}><br/>boAt Marvel Airdopes 131 In-Ear Truly Wireless Earbuds with Mic (Bluetooth 5.0, Google Assistant and Siri Supported, Captain's Blue)<br/>
                        ₹1,449.00</NavLink>
                        </div>
                    </div>
            </div>
            </div>
        </>
    );
}
export default Audio;