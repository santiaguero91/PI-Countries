import  {Home, Landing, Form, Details, Activities,ModifyActivity}  from "../views/vIndex"
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion/dist/framer-motion"

function AnimatedRoutes(){
    const location = useLocation();

    return(
        <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}> 
        <Route exact path="/" element={<Landing />} /> 
        <Route exact path="/home" element={<Home />} /> 
        <Route exact path="/form" element={<Form />} /> 
        <Route exact path="detail/:id" element={<Details/>}  />
        <Route exact path="/activities" element={<Activities/>}  />
        <Route exact path="/modactivities" element={<ModifyActivity/>}  />
        </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes