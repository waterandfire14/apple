import React from "react";
import Head from "./Head";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import Items from "./Items";

import Tv from "./Tv";
import Laptop from "./Laptop";
import {Route, Switch} from "react-router-dom";
import Home from "./Home";
import Audio from "./Audio";
import Cam from "./Cam";
import Gaming from "./Gaming";
import Buy from "./Buy";
import Sign from "./Sign";
import Mobile from "./Moblie";
function App() {
  return (
    <>
      
      
      
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/mobile" component={Mobile}/>
        <Route exact path="/tv" component={Tv}/>
        <Route exact path="/laptop" component={Laptop}/>
        <Route exact path="/audio" component={Audio}/>
        <Route exact path="/cam" component={Cam}/>
        <Route exact path="/game" component={Gaming}/>
        <Route exact path="/buy" component={Buy}/>
        <Route exact path="/sign" component={Sign}/>
        <Route component={Home}/>
      </Switch>

      
    </>
  );
}

export default App;