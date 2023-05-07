//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import { Secondscounter } from "./component/secondsCounter.jsx";


//render your react application
let contador=0;
setInterval(() => {
    contador+=1;
    ReactDOM.render(<Secondscounter tiempo={contador} />, document.querySelector("#app"));
    
}, 1000);