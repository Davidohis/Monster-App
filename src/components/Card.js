import React from "react";
import './Card.style.css';

const Card = ({ id, name, email }) => {
  return (
      <div className="overflow-x-hidden tc flex-wrap bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5" style={{marginTop: "40px"}}>
        <img className="robot" src={`https://robohash.org/${id}?set=set2`} alt="robot" />
        <div>
          <h2> {name} </h2> 
          <p> {email} </p>
        </div>
      </div>
  );
};

export default Card;
