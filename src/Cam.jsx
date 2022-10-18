import React from "react";
import { NavLink } from "react-router-dom";
function Cam()
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
           
            
            
        </ul>
        
         
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1638893483/Croma%20Assets/CMS/Category%20Page%20Banners/Cameras%20and%20Accessories/C2/200989d3706ac__cp_point-_-shoot-cameras_26-nov_evurzi.jpg/mxw_2048,f_auto" alt="cnicm" width="100%"/>
            </div>
            <div className="carousel-item">
              <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1638893483/Croma%20Assets/CMS/Category%20Page%20Banners/Cameras%20and%20Accessories/C2/163d39c538b34__cp_instant-cameras_26-nov_t1lqjb.jpg/mxw_2048,f_auto" alt="kdm" width="100%"/>
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
    <div className="display-4 text-center">Cameras & Accessories</div><br/>
    <div className="container">  
    <div className="card-deck">
                    <div className="card bg-light">
                        <div className="card-body text-center">
                            <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1637743104/Croma%20Assets/Imaging/Camera%20Accessories/Images/245716_idqfxt.png/mxw_2048,f_auto" width="200px" height="200px" />
                            <NavLink to="/buy" style={{color:"black"}}><br/> Nikon NIKKOR Z DX 18 – 140 mm f/ 3.5 - 6.3 Standard Lens (Telephoto Zoom, JMA713DA, Black)<br/>
                            ₹52,995.00</NavLink>
                        </div>
                    </div>
                    <div className="card bg-light">
                        <div className="card-body text-center">
                            <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1637852352/Croma%20Assets/Miscellanous/5K%20SKU_Images/Images/245495_fy8ypk.png/mxw_2048,f_auto" width="200px" height="200px"/>
                            <NavLink to="/buy" style={{color:"black"}}><br/>Nikon Aculon A211 12x 50mm Porro Prism Optical Binoculars (Superior Optical Performance, BAA815SA, Black) <br/>
                        ₹9,250.00</NavLink>
                        </div>
                    </div>
                    <div className="card bg-light">
                        <div className="card-body text-center">
                            <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1608988527/Croma%20Assets/Imaging/Camera%20Accessories/Images/213548_enpol9.png/mxw_2048,f_auto" width="200px" height="200px"/>
                            <NavLink to="/buy" style={{color:"black"}}><br/>Go Pro Sports Kit (AKTAC-001, Black) <br/>
                            ₹3,500.00             </NavLink>
                        </div>
                    </div>
            </div><br/>
    
                   
                    
                
</div>
<div className="display-4 text-center">Cameras</div><br/>
<div className="container">
<div className="card-deck">
                    <div className="card bg-light">
                        <div className="card-body text-center">
                            <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1605270450/Croma%20Assets/Imaging/Camera%20and%20Camcorders/Images/9004471681054.png/mxw_2048,f_auto" width="200px" height="200px" />
                            <NavLink to="/buy" style={{color:"black"}}><br/>GoPro Hero 9 20MP Action Camera (1080p Live Stream, Black)<br/>
                            ₹36,999.00</NavLink>
                        </div>
                    </div>
                    <div className="card bg-light">
                        <div className="card-body text-center">
                            <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1605173764/Croma%20Assets/Imaging/Camera%20and%20Camcorders/Images/8975588425758.png/mxw_2048,f_auto" width="200px" height="200px"/>
                            <NavLink to="/buy" style={{color:"black"}}><br/>Canon EOS 90D 32.5 MP Digital SLR Camera with 18 - 135 mm IS USM Lens<br/>
                        ₹123,500.00</NavLink>

                        </div>
                    </div>
                    <div className="card bg-light">
                        <div className="card-body text-center">
                            <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1634808984/Croma%20Assets/Imaging/Camera%20and%20Camcorders/Images/245216_evm0jg.png/mxw_2048,f_auto" width="200px" height="200px"/>
                            <NavLink to="/buy" style={{color:"black"}}><br/>GoPro Hero10 23 MP Action Camera (Waterproof, CHDHX-101-RW, Black)<br/>
                        ₹54,500.00</NavLink>
                        </div>
                    </div>
            </div>
            </div>
        </>
    );
}
export default Cam;