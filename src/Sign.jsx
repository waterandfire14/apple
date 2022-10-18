import React from "react";
import { NavLink } from "react-router-dom";
function Sign()
{
    return(
        <>
        <div className="container text-center">
<h1>Sign In</h1>
        </div>
        <form method="post">
            <div className="container" style={{border:"grey 1px solid", width:"30%", borderRadius:"5px" }}>

            <div className="form-group " >
                <label for="mn">Mobile Number:</label>
                 <input type="number" className="form-control" placeholder="Mobile Number" id="mn" required />
                 
              </div>
              <div className="form-group">
                  <label for="psw">Password:</label>
                  <input type="password" className="form-control" placeholder="Password" id="psw" required/>
              </div>
              <button className="btn btn-success" type="submit">Sign In</button><br/>
            </div>
        </form>
        </>
    );
}
export default Sign;