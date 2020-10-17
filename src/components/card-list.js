import React from "react";
import Card from "./Card";

const CardList = (props) => {
  return (
    <div>
      {props.monsters.map(({ id, name, email }) => (
        <Card key={id} id={id} name={name} email={email} />
      ))}
    </div>
  );
};

export default CardList;
