import React from "react";
import PropTypes from "prop-types";



export const Secondscounter = (props) =>{
    
    
    return(

        <>
         <div className="TT">
            <Numero/>
            <Numero segundo={parseInt(props.tiempo / 100000 % 10)}/>
            <Numero segundo={parseInt(props.tiempo / 10000 % 10)}/>
            <Numero segundo={parseInt(props.tiempo / 1000 % 10)}/>
            <Numero segundo={parseInt(props.tiempo / 100 % 10)}/>
            <Numero segundo={parseInt(props.tiempo / 10 % 10)}/>
            <Numero segundo={parseInt(props.tiempo % 10)}/>

         </div>
        </>


    );
}



const Numero = (props)=>{
    return(
        <>
            <div className="caja2">
                <h1>{props.segundo}</h1>

            </div>
        </>

    );
}

Numero.PropTypes={
    segundo: PropTypes.number
}
