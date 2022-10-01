import React from "react";
import Card from "../Card/Card";
import StyledNations from "./StyledNations";
import { Link } from "react-router-dom";

const Nations = ({ countries }) => {
  return (
    <StyledNations>
      {countries.map((el) => (
        <Link key={el.cca3} to={`details/${el.cca3}`}>
          <Card country={el} />
        </Link>
      ))}
    </StyledNations>
  );
};

export default Nations;
