
import Animal from './Animal/Animal';
import AnimalForm from './Animal/AnimalForm';
import './App.css';
import Race from './Race/Race';
import RaceForm from './Race/RaceForm';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import UpdateAnimalForm from './Animal/UpdateAnimal';
import UpdateRaceForm from './Race/UpdateRace';
import Login from './Login';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import Home from './Home/Home';


//HTTP_INTERCEPTOR for requests
axios.interceptors.request.use((request) => {
  if (localStorage.getItem("token")) {
    request.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
  }

  return request;
})

//HTTP_INTERCEPTOR for response
axios.interceptors.response.use((response)=>{
  let token = localStorage.getItem("token");
  if(token)
  {
    (response.data=='' &&(response.data = {}))
    console.log(response)
    console.log(token)
    response.data.user = jwt_decode(token+"");
  }
  return response;
})

function App() {
 
  return (
    <div className="App">
      
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/animals" element={<Animal />} />
            <Route path="/add-animal" element={<AnimalForm />} />
            <Route path="/update-animal" element={<UpdateAnimalForm />} />
            <Route path="/race" element={<Race />} />
            <Route path="/add-race" element={<RaceForm />} />
            <Route path="/update-race" element={<UpdateRaceForm />} />
          </Routes>
        </Router>

    </div>
  );
}

export default App;
