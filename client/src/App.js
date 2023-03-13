import './App.css';
import  {Home, Landing}  from "./views/vIndex"
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes> 
      <Route exact path="/" element={<Landing />} /> 
      <Route exact path="/home" element={<Home />} /> 
      </Routes>

    </div>
  );
}

export default App;
