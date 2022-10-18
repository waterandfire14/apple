import React from "react";
import Boats from "./boat.jfif";
import Asuss from "./asus.jpeg";
function Carousel()
{
    return(
        <>
        <div id="demo1" className="carousel slide"  data-ride="carousel">
            <ul className="carousel-indicators">
                <li data-target="#demo1" data-slide-to="0" className="active" ></li>
                <li data-target="#demo1" data-slide-to="1" ></li>
                <li data-target="#demo1" data-slide-to="2" ></li>

                </ul>


                <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="https://www.apple.com/v/iphone-14-pro/b/images/meta/iphone-14-pro_overview__e2a7u9jy63ma_og.png" height="500" alt="cnicm" width="100%"/>
                        </div>
                        <div className="carousel-item">
                            <img src={Boats} alt="kdm" height="500" width="100%"/>
                            </div>
                            <div className="carousel-item">
                            <img src={Asuss} alt="snsink" height="500" width="100%"/>
                            </div>

                            </div>


                            <a className="carousel-control-prev" href="#demo1" data-slide="prev">
                                <span className="carousel-control-prev-icon"></span>
                                </a>
                                <a className="carousel-control-prev" href="#demo1" data-slide="next">
                                <span className="carousel-control-next-icon"></span>
                                </a>

                                </div>
                                </>
                                );
                                }

                                export default Carousel;





