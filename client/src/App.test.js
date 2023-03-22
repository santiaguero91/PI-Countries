import React from "react"; 
import { GET_COUNTRIES, FILTER_BY_CONTINENT, FILTER_BY_SEASON, ORDER_BY_NAME, ORDER_BY_POPULATION, GET_COUNTRY_NAME, GET_ACTIVITIES, GET_COUNTRY_ID} from "../src/redux/action-types";
import {getCountries} from "../src/redux/actions"
import axios from "axios";
import {render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect";

/* */ 
import Landing from "../src/views/Landing"


describe("actions.js", function() {
  test("HOW MANY COUNTRIES???", async function() {
    let contries= getCountries()
    let json = await axios.get("http://localhost:3001/countries");
    console.log(contries);
    expect(json.data.length).toBe(250)
  })


  it ("actions are defined", function() {
  expect (GET_COUNTRIES).toBeDefined();
  expect (FILTER_BY_CONTINENT).toBeDefined();
  expect (FILTER_BY_SEASON).toBeDefined();
  expect (FILTER_BY_CONTINENT).toBeDefined();
  expect (ORDER_BY_NAME).toBeDefined();
  expect (ORDER_BY_POPULATION).toBeDefined();
  expect (GET_COUNTRY_NAME).toBeDefined();
  expect (GET_ACTIVITIES).toBeDefined();
  expect (GET_COUNTRY_ID).toBeDefined();
  })

  
     it ("la landing se renderiza bien", async () => {
      render(<Landing />);
      const article =  screen.getAllByRole("button",{name:"enter"})
      expect(article).toBeInTheDocument()

    })   




})




 

  // node --experimental-vm-modules node_modules/jest/bin/jest.js