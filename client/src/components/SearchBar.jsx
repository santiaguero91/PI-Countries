import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchCountryName } from "../redux/actions";
import { Button, Input, SearchBarDiv } from "./SearchBarStyle";
import { BsSearch } from "react-icons/bs";


export default function SearchBar({ setCurrentPage }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
    setCurrentPage(1);
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(searchCountryName(name));
  }

  return (
    <SearchBarDiv>
      <Input
        type="text"
        placeholder="Search..."
        onChange={(e) => handleInputChange(e)}
      />
      <Button type="submit" onClick={(event) => handleSubmit(event)}>
      <BsSearch />
      </Button>
    </SearchBarDiv>
  );
}
