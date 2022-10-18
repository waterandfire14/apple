import React from "react";
import { NavLink } from "react-router-dom";
function Laptop()
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
              <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1639647966/Croma%20Assets/CMS/LP%20Page%20Banners/2021/Intel%20Latest%20Gaming/LP_Intel_Loaded-up-to_15-Dec_h4o5nq.jpg/mxw_2048,f_auto" alt="cnicm" width="100%"/>
            </div>
            <div className="carousel-item">
              <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1638890099/Croma%20Assets/CMS/Category%20Page%20Banners/Computers%20and%20Tablets/C20%20Laptops/2b99d22ac13f6__cp_i5-laptops_26-nov_m1ys9a.jpg/mxw_2048,f_auto" alt="kdm" height="345px"  width="100%"/>
            </div>
            <div className="carousel-item">
              <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1638890095/Croma%20Assets/CMS/Category%20Page%20Banners/Computers%20and%20Tablets/C20%20Laptops/2f637de834460__cp_gaming-laptops_26-nov_tzqcqs.jpg/mxw_2048,f_auto" alt="snsnik" height="345" width="100%"/>
            </div>
           
          </div>
        
        
          <a className="carousel-control-prev" href="#demo2" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a className="carousel-control-next" href="#demo2" data-slide="next">
            <span className="carousel-control-next-icon"></span>
          </a>
    
    </div><br/>
    <br/>
    <div className="display-4 text-center">Popular Laptops</div><br/>
    <div className="container">  
    <div className="card-deck">
                    <div className="card bg-light">
                        <div className="card-body text-center">
                            <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1637217033/Croma%20Assets/Computers%20Peripherals/Laptop/Images/245268_ogcz63.png/mxw_2048,f_auto" width="200px" height="200px" />
                            <NavLink to="/buy" style={{color:"black"}}><br/> Lenovo IdeaPad Slim 3 10th Gen Core i5 Windows 11 Thin and Light Laptop (8 GB RAM, 512GB SSD, Intel Iris Xe Graphics, MS Office, 39.62cm, 81WB01BJIN, Platinum Grey)<br/>
                            ₹54,990.00</NavLink>
                        </div>
                    </div>
                    <div className="card bg-light">
                        <div className="card-body text-center">
                            <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1639211481/Croma%20Assets/Computers%20Peripherals/Laptop/Images/244234_eepmza.png/mxw_2048,f_auto" width="200px" height="200px"/>
                            <NavLink to="/buy" style={{color:"black"}}><br/>HP Pavilion 15 11th Gen Core i5 Windows 11 Laptop (8GB RAM, 512GB SSD, Intel Iris Xe + Shared Memory, MS Office, 39.6cm, 50N51PA, Natural Silver) <br/>
                        ₹66,990.00</NavLink>
                        </div>
                    </div>
                    <div className="card bg-light">
                        <div className="card-body text-center">
                            <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1636525653/Croma%20Assets/Computers%20Peripherals/Laptop/Images/245024_b6zoov.png/mxw_2048,f_auto" width="200px" height="200px"/>
                            <NavLink to="/buy" style={{color:"black"}}><br/>Dell Vostro 3400 11th Gen Core i3 Windows 10 Home Thin and Light (8GB RAM, 256GB SSD, Intel UHD Graphics, MS Office 2019, 35.56cm, D552201WIN9DE, Dune) <br/>
                        ₹40,490.00</NavLink>
                        </div>
                    </div>
            </div><br/>
           
</div><br/><br/>
<div className="display-4 text-center">Gaming Laptops</div><br/>
<div className="container">
<div className="card-deck">
                    <div className="card bg-light">
                        <div className="card-body text-center">
                            <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1633428007/Croma%20Assets/Computers%20Peripherals/Laptop/Images/243827_wtljxz.png/mxw_2048,f_auto" width="200px" height="200px" />
                            <NavLink to="/buy" style={{color:"black"}}><br/>Lenovo Legion 5 15ACH6 Ryzen 7 Windows 10 Home Gaming Laptop (16GB RAM, 512GB SSD, NVIDIA GeForce RTX 3050 + 4GB Graphics, MS Office, 39.6cm, 82JW0052IN, Shadow Black)<br/>
                            ₹107,490.00</NavLink>
                        </div>
                    </div>
                    <div className="card bg-light">
                        <div className="card-body text-center">
                            <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1638949476/Croma%20Assets/Computers%20Peripherals/Laptop/Images/245857_lgrgup.png/mxw_2048,f_auto" width="200px" height="200px"/>
                            <NavLink to="/buy" style={{color:"black"}}><br/>HP Pavilion 15-ec2150AX Ryzen 5 Windows 11 Home Laptop (8GB RAM, 512GB SSD, NVIDIA GeForce GTX 1650 + 4GB Graphics, 39.6cm, 589X6PA, Shadow Black)<br/>
                        ₹61,990.00</NavLink>

                        </div>
                    </div>
                    <div className="card bg-light">
                        <div className="card-body text-center">
                            <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1632485539/Croma%20Assets/Computers%20Peripherals/Laptop/Images/242853_flrkvg.png/mxw_2048,f_auto" width="200px" height="200px"/>
                            <NavLink to="/buy" style={{color:"black"}}><br/>Asus TUF Dash F15 FX516PE-HN089TS 11th Gen Core i5 Windows 10 Home Gaming Laptop (16GB RAM, 1TB SSD, NVIDIA GeForce RTX 3050 Ti + 4GB Graphics, MS Office, 39.62cm, 90NR0641-M03340, Eclipse Grey)<br/>
                        ₹88,990.00</NavLink>
                        </div>
                    </div>
            </div>
            </div>
        </>
    )
}
export default Laptop;