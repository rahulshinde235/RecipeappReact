import React, { useState } from "react";
import { useHistory } from "react-router";
import "./Searchbar.css";
const Searchbar = () => {
  const [term, setTerm] = useState("");
  let history = useHistory();
  const formHandler = (e) => {
    e.preventDefault();
    history.push(`/search?q=${term}`);
  };
  return (
    <div className={`searchbar `}>
      <form onSubmit={formHandler}>
        <label htmlFor="search">Search </label>
        <input
          type="text"
          id="search"
          onChange={(e) => setTerm(e.target.value)}
          value={term}
          required
        />
      </form>
    </div>
  );
};

export default Searchbar;
