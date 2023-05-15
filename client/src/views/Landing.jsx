import { Link } from "react-router-dom";
import React from "react";
import globeVideo from "../components/Images/glovevideo.mp4";
import { Background, Bienvenido, VideoGlobe } from "./LandingStyle";

const Landing = () => {
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
          WELCOME
        </Bienvenido>
      </Link>

      <VideoGlobe src={globeVideo} alt="glovevideo" autoPlay loop muted />
    </Background>
  );
};
export default Landing;
