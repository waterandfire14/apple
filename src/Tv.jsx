import React from "react";
import { NavLink } from "react-router-dom";
function Tv()
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

<div id="demo3" className="carousel slide"  data-ride="carousel">
        <ul className="carousel-indicators">
            <li data-target="#demo3" data-slide-to="0" className="active" ></li>
            <li data-target="#demo3" data-slide-to="1" ></li>
            <li data-target="#demo3" data-slide-to="2"></li>
            
            
        </ul>
        
         
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1640955491/Croma%20Assets/CMS/Category%20Page%20Banners/Televisions%20and%20Accessories/C392/LP_Hisense-Televisions_31-Dec_khjavr.jpg/mxw_2048,f_auto" alt="cnicm" width="100%"/>
            </div>
            <div className="carousel-item">
              <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1641209795/Croma%20Assets/CMS/CAtegory/Televisions/LP_32-LED-Top-Brands_03-Jan_klnpgr.jpg/mxw_2048,f_auto" alt="kdm" width="100%"/>
            </div>
            <div className="carousel-item">
              <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1641209795/Croma%20Assets/CMS/CAtegory/Televisions/LP_Expanded-Horizons_03-Jan_bereey.jpg/mxw_2048,f_auto" alt="snsnik"  width="100%"/>
            </div>
           
          </div>
        
        
          <a className="carousel-control-prev" href="#demo3" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a className="carousel-control-next" href="#demo3" data-slide="next">
            <span className="carousel-control-next-icon"></span>
          </a>
    
    </div><br/>
    <div className="container text-center">
        <img src="https://media.croma.com/image/upload/v1638535726/Croma%20Assets/CMS/CAtegory/Televisions/1-Split_TV_03-Dec_ccf8bc.jpg" width="1000px" height="285px"/>
    </div><br/><br/>
    <div className="display-4 text-center">Popular @ Croma</div><br/>
    <div className="container">
    <div className="card-deck">
                    <div className="card bg-light">
                        <div className="card-body text-center">
                            <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1618815413/Croma%20Assets/Entertainment/Television/Images/233048_gkqaqe.png/mxw_2048,f_auto" width="200px" height="200px" />
                            <NavLink to="/buy" style={{color:"black"}}><br/>Hisense A71 Series 146cm (58 Inch) Ultra HD 4K LED Android Smart TV (1 Years Warranty, Built-in Chromecast, 58A71F, Black)<br/>
                            ₹41,990.00</NavLink>
                        </div>
                    </div>
                    <div className="card bg-light">
                        <div className="card-body text-center">
                            <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1605340015/Croma%20Assets/Entertainment/Television/Images/8942485504030.png/mxw_2048,f_auto" width="200px" height="200px"/>
                            <NavLink to="/buy" style={{color:"black"}}><br/>Samsung Series 4 T4050 80 cm (32 inch) HD Ready LED TV (UA32T4050ARXXL, Black)<br/>
                        ₹16,990.00</NavLink>
                        </div>
                    </div>
                    <div className="card bg-light">
                        <div className="card-body text-center">
                            <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1627985717/Croma%20Assets/Entertainment/Television/Images/241479_onpvkw.png/mxw_2048,f_auto" width="200px" height="200px"/>
                            <NavLink to="/buy" style={{color:"black"}}><br/>Xiaomi Mi 4A Horizon Edition 100cm (40 Inch) Full HD LED Android Smart TV (Built-in Chromecast, ELA4642IN, Black)<br/>
                        ₹24,999.00</NavLink>
                        </div>
                    </div>
            </div><br/>
            
            
</div><br/><br/>
<div className="display-4 text-center">Top Deals</div><br/>
<div className="container">
<div className="card-deck">
                    <div className="card bg-light">
                        <div className="card-body text-center">
                            <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1618648645/Croma%20Assets/Entertainment/Television/Images/234143_e6v7hb.png/mxw_2048,f_auto" width="200px" height="200px" />
                            <NavLink to="/buy" style={{color:"black"}}><br/> Samsung 6 Series 108cm (43 Inch) Ultra HD 4K QLED Smart TV (Wi-Fi Supported, QA43Q60AAKLXL, Black)  <br/>
                            ₹60,900.00</NavLink>
                        </div>
                    </div>
                    <div className="card bg-light">
                        <div className="card-body text-center">
                            <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1605294913/Croma%20Assets/Entertainment/Television/Images/8867312500766.png/mxw_2048,f_auto" width="200px" height="200px"/>
                            <NavLink to="/buy" style={{color:"black"}}><br/>LG 126 cm (50 inch) 4k Ultra HD LED Smart TV (Black, 50UM7700)<br/>
                        ₹54,990.00</NavLink>
                        </div>
                    </div>
                    <div className="card bg-light">
                        <div className="card-body text-center">
                            <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1615284752/Croma%20Assets/Entertainment/Television/Images/232810_wgdohg.png/mxw_2048,f_auto" width="200px" height="200px"/>
                            <NavLink to="/buy" style={{color:"black"}}><br/>LG CX Series 121.92cm (48 Inch) Ultra HD 4K OLED Smart TV (Self Lighting Pixel Dimming, OLED48CXPTA, Black)<br/>
                        ₹109,990.00</NavLink>
                        </div>
                    </div>
            </div>
            </div>
        </>
    )
}

export default Tv;