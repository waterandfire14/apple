import React from "react";
import { NavLink } from "react-router-dom";
function Buy()
{
    return(
        <>
    
    <form method="post" >
        <div className="container " style={{width:"70%"}}>
            <div className="display-4 text-center">Buy Now</div><br/>
            <div className="bruh text-center"><h1>Enter the Details</h1></div>
            <div className="form-group " >
                <label for="mail">Full Name:</label>
                 <input type="text" className="form-control" placeholder="Full Name" id="fname" required />
                 
              </div>
              <div className="form-group">
                 <label for="psw">Address</label>
                 <input type="text" className="form-control" placeholder="Street Address" required/><br/>
                 <input type="text" className="form-control" placeholder="City" required/><br/>
                 <input type="text" className="form-control" placeholder="State/Province" required/><br/>
                 <input type="text" className="form-control" placeholder="Postal/ Zip code" required/>
              </div>
             <div className="">
                 <div className="form-group">
                     <label for="phn">Mobile Number</label>
                     <input type="number" className="form-control" placeholder="Mobile Number" required/>
                 </div>
                 <div className="form-group">
                     <label for="email">E-mail</label>
                     <input type="email" className="form-control" placeholder="ex: email@xyz.com" required/>
                 </div>
                <button type="btn" className="btn btn-success">Submit</button> 
              </div>
              </div>
             
              </form>
        </>
    );
}
export default Buy;