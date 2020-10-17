import React from "react";
import './Card.style.css';

const Scroll = (props) => {
   return(
       <div style={{overflow: 'auto', border: '2px solid #000', height: '500px'}}>
         {props.children}
       </div>
   )
}

export default Scroll;