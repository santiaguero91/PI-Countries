import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import globeVideo from "../components/Images/glovevideo.mp4";
import { Background, Bienvenido, VideoGlobe } from "./LandingStyle";
import logo from "../components/Images/logo.png";
import { useDispatch } from "react-redux";
import { getApi } from "../redux/actions";




const Landing = () => {
  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(getApi());
  }, [dispatch]);

  return (
    <Background
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0, transition: { duration: 0.1 } }}
    >
      <Link to="/home">
        <Bienvenido
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 , transition: { duration: 1, delay: 2 } }}
          exit={{ opacity: 1, transition: { duration: 0.1 } }}
        >
          <img width="400px"src={logo} alt="logo"/>
        </Bienvenido>
      </Link>

      <VideoGlobe src={globeVideo} alt="glovevideo" autoPlay loop muted />
    </Background>
  );
};
export default Landing;
