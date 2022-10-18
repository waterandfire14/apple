import React from "react";
import { NavLink } from "react-router-dom";

function Mobile()
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
<div id="demo2" className="carousel slide"  data-ride="carousel">
        <ul className="carousel-indicators">
            <li data-target="#demo2" data-slide-to="0" className="active" ></li>
            <li data-target="#demo2" data-slide-to="1" ></li>
            <li data-target="#demo2" data-slide-to="2"></li>
            
            
        </ul>
        
         
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1641547070/Croma%20Assets/CMS/Category%20Page%20Banners/Phones%20and%20Wearables/c10/LP_Vivo-V23Series_6Jan2022_tvfqmy.png/mxw_2048,f_auto" alt="cnicm" width="100%"/>
            </div>
            <div className="carousel-item">
              <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1628237569/Croma%20Assets/CMS/LP%20Page%20Banners/2021/PCP%20Mobile/MobileCPC-HeaderBanners_06Aug_vuuoxb.jpg/mxw_2048,f_auto" alt="kdm" width="100%"/>
            </div>
            <div className="carousel-item">
              <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1632897669/Croma%20Assets/CMS/Homepage%20Banners/HP%20Rotating/2021/HP_Oppo-F19s_29Sept_ndyszd.jpg/mxw_2048,f_auto" alt="snsnik" height="345" width="100%"/>
            </div>
           
          </div>
        
        
          <a className="carousel-control-prev" href="#demo2" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a className="carousel-control-next" href="#demo2" data-slide="next">
            <span className="carousel-control-next-icon"></span>
          </a>
    
    </div><br/>
    <div className="container text-center">
        <img src="https://media.croma.com/image/upload/v1638895971/Croma%20Assets/CMS/CAtegory/Mobile%20phone%20-%20C10/LP-Strip_SamsungZFold3_7Dec_oaoykg.png" width="1000px" height="285px"/>
    </div><br/><br/>
    <div className="display-4 text-center">Popular Smartphones</div><br/>
    <div className="container">
    <div className="card-deck">
                    <div className="card bg-light">
                        <div className="card-body text-center">
                            <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1613658201/Croma%20Assets/Communication/Mobiles/Images/232722_t0tjfw.png/mxw_2048,f_auto" width="200px" height="200px" />
                            <NavLink to="/buy" style={{color:"black"}}><br/>Samsung Galaxy A12 (64GB ROM, 4GB RAM, SM-A125FZKGINS, Black)<br/>
                            ₹12,999.00</NavLink>
                        </div>
                    </div>
                    <div className="card bg-light">
                        <div className="card-body text-center">
                            <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1623390037/Croma%20Assets/Communication/Mobiles/Images/235154_sbzk7f.png/mxw_2048,f_auto" width="200px" height="200px"/>
                            <NavLink to="/buy" style={{color:"black"}}><br/>OnePlus Nord CE 5G (256GB ROM, 12GB RAM, Blue Void)<br/>
                        ₹27,999.00</NavLink>
                        </div>
                    </div>
                    <div className="card bg-light">
                        <div className="card-body text-center">
                            <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1605264363/Croma%20Assets/Communication/Mobiles/Images/9001729130526.png/mxw_2048,f_auto" width="200px" height="200px"/>
                            <NavLink to="/buy" style={{color:"black"}}><br/>Apple iPhone 11 (128GB ROM, 4GB RAM, MHDJ3HN/A, White)<br/>
                        ₹54,900.00</NavLink>
                        </div>
                    </div>
            </div><br/>
            <div className="card-deck">
                    <div className="card bg-light">
                        <div className="card-body text-center">
                            <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1612763837/Croma%20Assets/Communication/Mobiles/Images/232408_wuudsl.png/mxw_2048,f_auto" width="200px" height="200px" />
                            <NavLink to="/buy" style={{color:"black"}}><br/>Samsung Galaxy M02 (32GB ROM, 3GB RAM, SM-M022GZBDINS, Blue)<br/>
                        ₹8,499.00</NavLink>
                        </div>
                    </div>
                    <div className="card bg-light">
                        <div className="card-body text-center">
                            <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1624523026/Croma%20Assets/Communication/Mobiles/Images/235454_idgeca.png/mxw_2048,f_auto" width="200px" height="200px"/>
                            <NavLink to="/buy" style={{color:"black"}}><br/>Vivo V21e (128GB ROM, 8GB RAM, PD2102BF_IN, Sunset Jazz)<br/>
                        ₹24,990.00</NavLink>
                        </div>
                    </div>
                    <div className="card bg-light">
                        <div className="card-body text-center">
                            <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1623164395/Croma%20Assets/Communication/Mobiles/Images/234749_nbsxxn.png/mxw_2048,f_auto" width="200px" height="200px"/>
                            <NavLink to="/buy" style={{color:"black"}}><br/>Vivo Y73 (128GB ROM, 8GB RAM, PD2078F_IN, Diamond Flare)<br/>
                        ₹20,990.00</NavLink>
                        </div>
                    </div>
            </div>
</div><br/><br/>
<div className="display-4 text-center">Game of Phones</div><br/>
<div className="container">
<div className="card-deck">
                    <div className="card bg-light">
                        <div className="card-body text-center">
                            <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1605263916/Croma%20Assets/Communication/Mobiles/Images/8999513128990.png/mxw_2048,f_auto" width="200px" height="200px" />
                            <NavLink to="/buy" style={{color:"black"}}><br/>Apple iPhone 12 Pro (256GB ROM, 6GB RAM, MGMR3HN/A, Gold)<br/>
                            ₹104,900.00</NavLink>
                        </div>
                    </div>
                    <div className="card bg-light">
                        <div className="card-body text-center">
                            <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1629786151/Croma%20Assets/Communication/Mobiles/Images/242286_lbwl3g.png/mxw_2048,f_auto" width="200px" height="200px"/>
                            <NavLink to="/buy" style={{color:"black"}}><br/>Samsung Galaxy Z Fold3 5G (256GB ROM, 12GB RAM, SM-F926BZGDINU, Phantom Green)<br/>
                        ₹149,999.00</NavLink>

                        </div>
                    </div>
                    <div className="card bg-light">
                        <div className="card-body text-center">
                            <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1615188937/Croma%20Assets/Communication/Mobiles/Images/233185_zkadpj.png/mxw_2048,f_auto" width="200px" height="200px"/>
                            <NavLink to="/buy" style={{color:"black"}}><br/>Xiaomi Redmi 9 Power (128GB ROM, 6GB RAM, MZB08SUIN, Mighty Black)<br/>
                        ₹13,999.00</NavLink>
                        </div>
                    </div>
            </div>
            </div>
        </>
    )
}

export default Mobile;