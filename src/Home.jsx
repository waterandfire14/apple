import React from "react";
import Carousel from "./Carousel";
import Head from "./Head";
import Items from "./Items";
import Navbar from "./Navbar";
function Home()
{
    return(
        <>
        <Head/>
        <Navbar/>
        <Carousel/>
        <Items/>
        </>
    );
}
export default Home;