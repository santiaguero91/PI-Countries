import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, postActivities } from "../redux/actions";
import style from "../styles/Form.module.css";
import validate from "./FormValidation";
import { Background, ButtonsDiv, Clean } from "./FormStyle";
import { motion } from "framer-motion/dist/framer-motion";

const Form = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const navigate = useNavigate();

  const [input, setInput] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: [],
    country: [],
    img: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: [],
    country: [],
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleCheck = (e) => {
    if (e.target.checked) {
      setInput({
        ...input,
        season: [...input.season, e.target.value],
      });
      setErrors(
        validate({
          ...input,
          season: [...input.season, e.target.value],
        })
      );
    }
  };

  const handleSelect = (e) => {
    setInput({
      ...input,
      country: [...input.country, e.target.value],
    });
    setErrors(
      validate({
        ...input,
        country: [...input.country, e.target.value],
      })
    );
  };

  const clean = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      country: [],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(postActivities(input));

    setInput({
      name: "",
      difficulty: "",
      duration: "",
      season: [],
      country: [],
      img: "",
    });
    navigate("/activities");
    alert("Activity was created successfully!!");
  };
  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0, transition: { duration: 0.1 } }}
    >
      <Background>
        <Link to="/activities">
          <ButtonsDiv>Back to Activities</ButtonsDiv>
        </Link>
        <form className="form">
          <h4>Create New Activity</h4>
          <div>
            <label>Activity Name:</label>
            <input
              id="inputname"
              type="text"
              value={input.name}
              name="name"
              onChange={(e) => handleChange(e)}
              title="name"
            />
            {errors.name && <p className={style.alert}>{errors.name}</p>}
          </div>
          <div>
            <label>Difficulty:</label>
            <input
              type="number"
              value={input.difficulty}
              name="difficulty"
              onChange={(e) => handleChange(e)}
              title="difficulty"
              min="1"
              max="5"
              placeholder="1 to 5"
            />
            {errors.difficulty && (
              <p className={style.alert}>{errors.difficulty}</p>
            )}
          </div>
          <div>
            <label>Duration:</label>
            <input
              type="number"
              value={input.duration}
              name="duration"
              onChange={(e) => handleChange(e)}
              title="duration"
              min="1"
              max="72"
              placeholder="1 to 72"
            />
            {errors.duration && (
              <p className={style.alert}>{errors.duration}</p>
            )}
          </div>
          <br></br>
          <div className="SeasonCheckboxs">
            <label>Season:</label> <br></br>
            <label>
              <input
                type="checkbox"
                name="Summer"
                value="Summer"
                onChange={(e) => handleCheck(e)}
              />{" "}
              Summer
            </label>
            <label>
              <input
                type="checkbox"
                name="Autumn"
                value="Autumn"
                onChange={(e) => handleCheck(e)}
              />
              Autumn
            </label>
            <label>
              <input
                type="checkbox"
                name="Winter"
                value="Winter"
                onChange={(e) => handleCheck(e)}
              />
              Winter
            </label>
            <label>
              <input
                type="checkbox"
                name="Spring"
                value="Spring"
                onChange={(e) => handleCheck(e)}
              />
              Spring
            </label>
            {input.season.length === 0 && (
              <p className={style.alert}>{errors.season}</p>
            )}
          </div>

          <div className={style.selectCountries}>Select Countries:</div>
          <select onChange={(e) => handleSelect(e)}>
            <option>Select Country</option>
            {countries.map((country) => (
              <option value={country.name} key={country.id}>
                {country.name}
              </option>
            ))}
          </select>

          <div className={style.divblance}>
            <h3>Countries Selected</h3>
            <ul>
              <li>{input.country.map((el) => el + "  , ")}</li>
            </ul>
            {input.country.length === 0 && (
              <p className={style.alert}>{errors.country}</p>
            )}
            {input.country.length !== 0 && (
              <Clean onClick={(e) => clean(e)}>Clean</Clean>
            )}
          </div>

          <div>
            <label>Agregar Imagen:</label>
            <input
              placeholder="This is optional"
              id="inputimg"
              type="text"
              value={input.img}
              name="img"
              onChange={(e) => handleChange(e)}
              title="img"
            />
          </div>
          <div className="divSubmitButton">
            {input.name !== "" &&
            input.difficulty <= 5 &&
            input.difficulty >= 1 &&
            input.duration <= 72 &&
            input.duration >= 1 &&
            input.season.length !== 0 &&
            input.country.length !== 0 ? (
              <button
                id="submitButton"
                onClick={(e) => handleSubmit(e)}
                type="submit"
              >
                CREATE ACTIVITY
              </button>
            ) : (
              <button
                id="submitButton"
                disabled
                onClick={(e) => handleSubmit(e)}
                type="submit"
              >
                CREATE ACTIVITY
              </button>
            )}
          </div>
        </form>
      </Background>
    </motion.div>
  );
};
export default Form;
