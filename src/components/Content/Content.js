import React, { useState, useEffect } from "react";
import StyledContent from "./StyledContent";
import Header from "../Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Detail from "../../pages/Detail/Detail";

const Content = ({ toggleTheme, selected }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);
  return (
    <StyledContent>
      <Header toggleTheme={toggleTheme} selected={selected} />
      <Routes>
        <Route path="/" element={<Home countries={countries} />} />
        <Route path="details/:id" element={<Detail countries={countries} />} />
      </Routes>
    </StyledContent>
  );
};

export default Content;
