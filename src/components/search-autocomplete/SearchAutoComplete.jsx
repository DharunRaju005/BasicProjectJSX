import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import Suggestion from "./Suggestion";

const SearchAutoComplete = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUser] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [filteredUser, setFilteredUser] = useState([]);

  const fetchListOfUser = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      console.log(data);

      if (data && data.users && data.users.length) {
        setUser(data.users.map((userItem) => userItem.firstName));
        setLoading(false);

        setError(null);
      }
    } catch (error) {
      setLoading(false);

      console.log(error);
      setError(error);
    }
  };

  useEffect(() => {
    fetchListOfUser();
  }, []);

  const handleChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filteredData = users && users.length ? users.filter((item) => item.toLowerCase().indexOf(query) > -1) : [];
      setFilteredUser(filteredData);
      console.log(filteredData);
      setShowDropDown(true);
    } else {
      setShowDropDown(false);
    }
  };

  const handleClick = (event) => {
    setShowDropDown(false);
    setSearchParam(event.target.innerText);
    setFilteredUser([]);
  };

  return (
    <SearchAutoCompleteContainer>
      {loading ? <h1>Loading Data ! Please wait</h1> : <input value={searchParam} name="search-users" placeholder="Search Users here..." onChange={handleChange} />}

      {showDropDown && <Suggestion handleClick={handleClick} data={filteredUser} />}
    </SearchAutoCompleteContainer>
  );
};

const SearchAutoCompleteContainer = styled.div``;

export default SearchAutoComplete;
