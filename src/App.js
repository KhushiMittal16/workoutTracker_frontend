import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
// import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import CreateExercise from './components/create-exercise.component';
import ExerciseList from "./components/exercise-list.component";
import CreateUser from './components/create-user.component';
import Home from './components/Home'
import Navbar from "./components/navbar.components";
import { About } from './components/About';
import { ExcerciseDemo } from './components/ExcerciseDemo';
import { Beginner } from './videos/Beginner';
import { Intermediate } from './videos/Intermediate';
import { Advance } from './videos/Advance';
import {ContactUs} from './components/ContactUs';

function App() {
  return (
    <Router>
    <div>
      <Navbar/> 
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/exerciselist" exact element={<ExerciseList/>}/>
        <Route path="/exercisetutorials" element={<ExcerciseDemo/>}/>
        <Route path="/create" element={<CreateExercise/>}/>
        <Route path="/user" element={<CreateUser/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/beginnervideos" element={<Beginner/>}/>
        <Route path="/intermediatevideos" element={<Intermediate/>}/>
        <Route path="/advancedvideos" element={<Advance/>}/>
        <Route path="/contactUs" element={<ContactUs/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
