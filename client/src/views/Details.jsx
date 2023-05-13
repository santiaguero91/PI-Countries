import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getDetail } from "../redux/actions";
import style from "../styles/Details.module.css";
import ActivityCard from "../components/ActivityCard";
import { MainDetailsDiv, DetailDiv, ButtonHome } from "./DetailsStyle";
import { motion } from "framer-motion/dist/framer-motion"

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  const country = useSelector((state) => state.detail);

  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0, transition:{duration:0.2}}}
    >
    <MainDetailsDiv>
      {country.length > 0 ? (
        <DetailDiv>
          <div className="countryStats">
            <img
              className="imgFlag"
              alt="imgFlag"
              src={country[0].imgFlag}
            />
            <h1>Name: {country[0].name}</h1>
            <h1>Population: {country[0].population.toLocaleString("es-ES")}</h1>
            <h1>Capital: {country[0].capital}</h1>
            <h1>Continent: {country[0].continent}</h1>
            <h1>Area: {country[0].area.toLocaleString("es-ES")}</h1>
          </div>
          <div>
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
          </div>
          <Link to="/home">
          <ButtonHome>
            Back to Home
          </ButtonHome></Link>
        </DetailDiv>
      ) : (
        <p>LOADING...</p>
      )}
    </MainDetailsDiv>
    </motion.div>
  );
};
export default Details;
