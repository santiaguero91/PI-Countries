import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountries,
  filterCountriesByContinent,
  orderByName,
  orderByPopulation,
} from "../redux/actions";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";
import {
  ButtontoActivities,
  Continents,
  Countries,
  Filters,
  Home,
  LinkAndReload,
} from "./HomeStyle";
import { motion } from "framer-motion/dist/framer-motion";

const Landing = () => {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries);

  /////* PAGINATION  *//////
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("");

  // eslint-disable-next-line
  const [countriesPerPage, setCountriesPerPage] = useState(10);
  /* eslint-disable jsx-a11y/anchor-is-valid */
  // eslint-disable-next-line
  const [orden, setOrden] = useState("");
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = allCountries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNext = (pageNumber) => {
    setCurrentPage(pageNumber + 1);
  };

  ///////////////////handlers/////////////////////////////////

  function handleFilterContinent(event) {
    dispatch(filterCountriesByContinent(event.target.id));
    setFilter(event.target.id);
    setCurrentPage(1);
  }

  function handleOrderByName(event) {
    event.preventDefault();
    dispatch(orderByName(event.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${event.target.value}`);
  }

  function handleOrderByPopulation(event) {
    event.preventDefault();
    dispatch(orderByPopulation(event.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${event.target.value}`);
  }

  //////////////////////////////

  useEffect(() => {
    dispatch(getCountries());
    setFilter("All");
  }, [dispatch]);

  function handleClick(event) {
    event.preventDefault();
    dispatch(getCountries());
  }

  function ver() {
    console.log(filter);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <Home>
        <LinkAndReload>
          <div className="firstRow">
            <Link to="/activities">
              <ButtontoActivities whileHover={{ opacity: 0 }}>
                Go to Activities
              </ButtontoActivities>
            </Link>
            <SearchBar setCurrentPage={setCurrentPage} />
            <button
              onClick={(e) => {
                handleClick(e);
              }}
            >
              Reload Countries
            </button>
          </div>
          <Filters>
            <select onChange={(e) => handleOrderByName(e)}>
              <option value="asc">A-Z</option>
              <option value="desc">Z-A</option>
            </select>

            <select onChange={(e) => handleOrderByPopulation(e)}>
              <option>Order by population</option>
              <option value="asc">Population increase</option>
              <option value="desc">Population decrease</option>
            </select>
          </Filters>
        </LinkAndReload>
        <Continents>
          <div
            className={`${filter === "All" ? "special" : ""}`}
            onClick={(e) => handleFilterContinent(e)}
            id="All"
          >
            ALL
          </div>
          <div
            className={`${filter === "Africa" ? "special" : ""}`}
            onClick={(e) => handleFilterContinent(e)}
            id="Africa"
          >
            AFRICA
          </div>
          <div
            className={`${filter === "South America" ? "special" : ""}`}
            onClick={(e) => handleFilterContinent(e)}
            id="South America"
          >
            South America
          </div>
          <div
            className={`${filter === "North America" ? "special" : ""}`}
            onClick={(e) => handleFilterContinent(e)}
            id="North America"
          >
            North America
          </div>
          <div
            className={`${filter === "Asia" ? "special" : ""}`}
            onClick={(e) => handleFilterContinent(e)}
            id="Asia"
          >
            Asia
          </div>
          <div
            className={`${filter === "Europe" ? "special" : ""}`}
            onClick={(e) => handleFilterContinent(e)}
            id="Europe"
          >
            Europe
          </div>
          <div
            className={`${filter === "Oceania" ? "special" : ""}`}
            onClick={(e) => handleFilterContinent(e)}
            id="Oceania"
          >
            Oceania
          </div>
          <div
            className={`${filter === "Antarctica" ? "special" : ""}`}
            onClick={(e) => handleFilterContinent(e)}
            id="Antarctica"
          >
            Antarctica
          </div>
        </Continents>
        {/*             <button onClick={(e) => ver(e)}>VER</button>
         */}

        <Countries>
          {currentCountries.map((el) => {
            return (
              <Card
                key={el.id}
                name={el.name}
                imgFlag={el.imgFlag}
                id={el.id}
                population={el.population}
                capital={el.capital}
                continent={el.continent}
                area={el.area}
                subregion={el.subregion}
                activities={el.activities}
              />
            );
          })}
        </Countries>

        <Pagination
          countriesPerPage={countriesPerPage}
          allCountries={allCountries.length}
          pagination={pagination}
          currentPage={currentPage}
          handleNext={handleNext}
          setCurrentPage={setCurrentPage}
        />
      </Home>
    </motion.div>
  );
};
export default Landing;
