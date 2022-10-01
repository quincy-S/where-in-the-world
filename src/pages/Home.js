import React, { useState } from "react";
import Search from "../components/Search/Search";
import Nations from "../components/Nations/Nations";

const Home = ({ countries }) => {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState([]);

  function handleChange(event) {
    setQuery(event.target.value);
  }

  function addFilter(event) {
    let region = event.target.innerHTML;
    const filtered = countries.filter((el) =>
      el.region.toLowerCase().includes(region.toLowerCase())
    );
    setFilter(filtered);
  }

  const searched = countries.filter((el) =>
    el.name.common.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <Search query={query} handleChange={handleChange} addFilter={addFilter} />
      {query === "" && filter.length > 0 ? (
        <Nations countries={filter} />
      ) : (
        <Nations countries={searched ? searched : countries} />
      )}
    </>
  );
};

export default Home;
