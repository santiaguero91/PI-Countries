import './App.css';
import  {Home, Landing, Form, Details, Activities,ModifyActivity}  from "./views/vIndex"
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes> 
      <Route exact path="/" element={<Landing />} /> 
      <Route exact path="/home" element={<Home />} /> 
      <Route exact path="/form" element={<Form />} /> 
      <Route exact path="detail/:id" element={<Details/>}  />
      <Route exact path="/activities" element={<Activities/>}  />
      <Route exact path="/modactivities" element={<ModifyActivity/>}  />
      </Routes>

    </div>
  );
}

export default App;
