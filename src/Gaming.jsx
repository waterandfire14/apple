import React from "react";
import { NavLink } from "react-router-dom";
function Gaming()
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

    
    <div className="display-4 text-center">Popular Games</div><br/>
    <div className="container">  
    <div className="card-deck">
                    <div className="card bg-light">
                        <div className="card-body text-center">
                            <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1605130049/Croma%20Assets/Gaming/Gaming%20Software/Images/8995621503006.png/mxw_2048,f_auto" width="200px" height="200px" />
                            <NavLink to="/buy" style={{color:"black"}}><br/> Rockstar Games PS4 Grand Theft Auto V Premium Edition Game<br/>
                            ₹1,999.00</NavLink>
                        </div>
                    </div>
                    <div className="card bg-light">
                        <div className="card-body text-center">
                            <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1605203081/Croma%20Assets/Gaming/Gaming%20Software/Images/8871236042782.png/mxw_2048,f_auto" width="200px" height="200px"/>
                            <NavLink to="/buy" style={{color:"black"}}> <br/>PS4 Game (FIFA 20) <br/>
                        ₹2,499.00</NavLink>
                        </div>
                    </div>
                    <div className="card bg-light">
                        <div className="card-body text-center">
                            <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1605174751/Croma%20Assets/Gaming/Gaming%20Software/Images/8841080832030.png/mxw_2048,f_auto" width="200px" height="200px"/>
                            <NavLink to="/buy" style={{color:"black"}}><br/> PS4 Game (Days Gone)<br/>
                        ₹1,299.00</NavLink>
                        </div>
                    </div>
            </div><br/>
            <div className="card-deck">
                    <div className="card bg-light">
                        <div className="card-body text-center">
                            <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1605278865/Croma%20Assets/Gaming/Gaming%20Software/Images/8841080569886.png/mxw_2048,f_auto" width="200px" height="200px" />
                            <NavLink to="/buy" style={{color:"black"}}><br/>Xbox One Game (Far Cry New Dawn)<br/>
                        ₹1,294.00</NavLink>
                        </div>
                    </div>
                    <div className="card bg-light">
                        <div className="card-body text-center">
                            <img src="https://pbs.twimg.com/media/E3yj4mPVgAI9V85.jpg" width="200px" height="200px"/>
                            <NavLink to="/buy" style={{color:"black"}}><br/>Forza Horizon 5 Standard Edition<br/>
                        ₹3,462.00</NavLink>
                        </div>
                    </div>
                    <div className="card bg-light">
                        <div className="card-body text-center">
                            <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1605279033/Croma%20Assets/Gaming/Gaming%20Software/Images/8841080307742.png/mxw_2048,f_auto" width="200px" height="200px"/>
                            <NavLink to="/buy" style={{color:"black"}}><br/>Xbox One Game (Capcom (Resident Evil 2)
<br/>
₹994.00</NavLink>
                        </div>
                    </div>
            </div>
</div><br/><br/>


        </>
    );
}
export default Gaming;