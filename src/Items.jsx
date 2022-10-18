import React from "react";
import { NavLink } from "react-router-dom";
function Items()
{
    return(
        <>
        <div className="container">
        <div className="display-4 text-center">New At aether</div>
        <br/>
            <div className="card-deck">

                <div className="card bg-light">
                    <div className="card-body text-center">
                                <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1639575437/Croma%20Assets/CMS/Homepage%20Banners/New%20at%20croma/HP_BB_NewAtCroma_GalaxyA03Core_15Dec_kpbw0i.png/mxw_2048,f_auto" width="300px" height="200px"/>
                    </div>
                </div>

                <div className="card bg-light">
                    <div className="card-body text-center">
                    <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1641207257/Croma%20Assets/CMS/Homepage%20Banners/New%20at%20croma/HP_BB_NewAtCroma_Zebronics_03-Jan_zdj81y.png/mxw_2048,f_auto" width="300px" height="200px"/>
                    </div>
                </div>

                <div className="card bg-light">
                    <div className="card-body text-center">
                    <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1641293208/Croma%20Assets/CMS/Homepage%20Banners/New%20at%20croma/HP_BB_NewAtCroma_Smart-tvs_04-Jan_jrp4ea.png/mxw_2048,f_auto" width="300px" height="200px"/>
                    </div>
                </div>
            </div>
            <br/>
            <div className="display-4 text-center">Popular Products</div><br/>
            <div className="card-deck">

           <div className="card bg-light">
               <div className="card-body text-center">
                      <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1634802838/Croma%20Assets/Communication/Mobiles/Images/244393_jfahdj.png/mxw_320,f_auto"/>     
                      <NavLink to="/buy" style={{color:"black"}}>Xiaomi Redmi 9A Sport (32GB ROM, 3GB RAM, MZB0A0WIN, Coral Green)<br/>
                      ₹8,599.00 (Inclusive of all taxes)</NavLink>
               </div>
           </div>
           
           <div className="card bg-light">
               <div className="card-body text-center">
                    <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/h_300,w_300/v1631855977/Croma%20Assets/Communication/Mobiles/Images/243518_yfgdk3.png/mxw_320,f_auto"/><br/>
                    <NavLink to="/buy" style={{color:"black"}}>Apple iPhone 13 Pro (512GB ROM, MLVQ3HN/A, Gold)<br/>
                    ₹149,900.00 
(Inclusive of all taxes)</NavLink>
               </div>
           </div>
           
           <div className="card bg-light">
               <div className="card-body text-center">
               <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1623393211/Croma%20Assets/Communication/Mobiles/Images/235155_dbcwof.png/mxw_320,f_auto"/>
               <NavLink to="/buy" style={{color:"black"}}>OnePlus Nord CE 5G (256GB ROM, 12GB RAM, Silver Ray)<br/>
               ₹27,999.00 
(Inclusive of all taxes)</NavLink>
               
               </div>
           </div>
           </div><br/>
           <div className="display-4 text-center">
               Laptops and Tablets
           </div><br/>
           <div className="card-deck">

           <div className="card bg-light">
               <div className="card-body text-center">
                      <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1606585888/Croma%20Assets/Computers%20Peripherals/Laptop/Images/9009479057438.png/mxw_320,f_auto"/>     
                      <NavLink to="/buy" style={{color:"black"}}> Apple MacBook Air M1 Chip macOS Big Sur Laptop (8GB RAM, 256GB SSD, Apple M1 GPU, 33.78cm, MGN63HN/A, Space Grey)<br/>
                      ₹83,900.00
(Inclusive of all taxes)</NavLink>
               </div>
           </div>
           
           <div className="card bg-light">
               <div className="card-body text-center">
                    <img src="https://media.croma.com/image/upload/v1605271083/Croma%20Assets/Computers%20Peripherals/Tablets%20and%20iPads/Images/8977309499422.png" width="300px" height="300px"/><br/><br/>
                    <NavLink to="/buy" style={{color:"black"}}>Apple iPad Air WiFi iOS Tablet (iPadOS 14, Apple A14 Bionic Chip, 27.68 cm (10.9 Inch), 3GB RAM, 64GB ROM, MYFM2HN/A, Space Grey)<br/>
                    ₹50,900.00

(Inclusive of all taxes)
</NavLink>
               </div>
           </div>
           
           <div className="card bg-light">
               <div className="card-body text-center">
               <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1615361196/Croma%20Assets/Computers%20Peripherals/Laptop/Images/233416_gv94su.png/mxw_320,f_auto"/><br/>
               <NavLink to="/buy" style={{color:"black"}}> HP 15s-gr0012AU (35K35PA#ACJ) Ryzen 3 Windows 10 Home Single Language Thin and Light Laptop (8GB RAM, 1TB HDD + 256GB SSD, AMD Radeon Graphics, MS Office, 39.62cm, Natural Silver)
              <br/> ₹41,990.00

(Inclusive of all taxes)</NavLink>
               
               </div>
           </div>
           </div><br/>
           <div className="display-4 text-center">
               Audio
           </div>
           <div className="card-deck">

<div className="card bg-light">
    <div className="card-body text-center">
           <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1637933045/Croma%20Assets/Entertainment/Headphones%20and%20Earphones/Images/242300_pnmjdi.png/mxw_320,f_auto"/>     
           <NavLink to="/buy" style={{color:"black"}}>OnePlus Bullets Wireless Z Bass Edition In-Ear Wireless Earphone with Mic (Bluetooth 5.0, Quick Switch, 5481100067, Bold Black)<br/>

           ₹1,999.00

(Inclusive of all taxes)</NavLink>
    </div>
</div>

<div className="card bg-light">
    <div className="card-body text-center">
         <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1605171707/Croma%20Assets/Entertainment/Speakers%20and%20Media%20Players/Images/8944840572958.png/mxw_320,f_auto"/>
         <NavLink to="/buy" style={{color:"black"}}>boAt Stone Bluetooth Portable Speaker (Black)<br/>
         ₹2,999.00

(Inclusive of all taxes)</NavLink>
    </div>
</div>

<div className="card bg-light">
    <div className="card-body text-center">
    <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1633977153/Croma%20Assets/Entertainment/Headphones%20and%20Earphones/Images/242883_czv27v.png/mxw_320,f_auto"/><br/>
    <NavLink to="/buy" style={{color:"black"}}>Philips On-Ear Noise Isolation Wireless Headphone with Mic (Bluetooth 5.0, Bass Boost Button, TAH4205BK/00, Black)
    ₹1,799.00

(Inclusive of all taxes)</NavLink>

    </div>
</div>
</div><br/>
<br/>
<div className="card-deck">

<div className="card bg-light">
    <div className="card-body text-center">
           <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1640152972/Croma%20Assets/CMS/Homepage%20Banners/Big%20Tile/HP_BigTile_AudioDevices_22Dec_xvz7xk.png/mxw_2048,f_auto" width="500px" height="300px"/>     
           
    </div>
</div>

<div className="card bg-light">
    <div className="card-body text-center">
         <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1638433378/Croma%20Assets/CMS/Homepage%20Banners/Big%20Tile/HP_BigTile_Tablets_2Dec_urlox5.png/mxw_2048,f_auto" width="500px" height="300px"/>
         

    </div>
</div>


</div>
           </div><br/>
        </>
    );
}

export default Items;