import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getDetail } from "../redux/actions";
import style from "../styles/Details.module.css";
import ActivityCard from "../components/ActivityCard";
import {
  MainDetailsDiv,
  DetailDiv,
  ButtonHome,
  CountryActivities,
  StatDiv,
} from "./DetailsStyle";
import { motion } from "framer-motion/dist/framer-motion";

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  const country = useSelector((state) => state.detail);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <MainDetailsDiv>
        {country.length > 0 ? (
          <DetailDiv>
            <motion.div
              className="countryStats"
              initial={{ x: -1000 }}
              animate={{ x: 0, transition: { duration: 0.8 } }}
            >
              <img className="imgFlag" alt="imgFlag" src={country[0].imgFlag} />
              <StatDiv>
                <h1>Name:</h1>
                <p>{country[0].name}</p>
              </StatDiv>
              <StatDiv>
                <h1>
                  Population:  
                  <p>{country[0].population.toLocaleString("es-ES")}</p>
                </h1>
              </StatDiv>
              <StatDiv>
                <h1>Capital: </h1>
                <p>{country[0].capital}</p>
              </StatDiv>
              <StatDiv>
                <h1>Continent: </h1>
                <p>{country[0].continent}</p>
              </StatDiv>
              <StatDiv>
                <h1>Area: </h1>
                <p>{country[0].area.toLocaleString("es-ES")}</p>
              </StatDiv>
            </motion.div>
            <CountryActivities
              initial={{ x: 1000 }}
              animate={{ x: 0, transition: { duration: 0.8 } }}
            >
              <h2>Activites</h2>
              <div className={style.countryActivities}>
                {country[0].activities.map(
                  ({ id, name, difficulty, duration, season, img }) => {
                    return (
                      <ActivityCard
                        key={id}
                        id={id}
                        name={name}
                        difficulty={difficulty}
                        duration={duration}
                        season={season}
                        img={img}
                      />
                    );
                  }
                )}
              </div>
            </CountryActivities>
            <Link to="/home">
              <ButtonHome>Back to Home</ButtonHome>
            </Link>
          </DetailDiv>
        ) : (
          <p>LOADING...</p>
        )}
      </MainDetailsDiv>
    </motion.div>
  );
};
export default Details;
