import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <Link to="/" className="navbar-brand" >Exercise Tracker</Link>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <Link to="/" class="nav-link">Exercises</Link>
        </li>
        <li class="nav-item">
          <Link to="/exercisetutorials" class="nav-link">Tutorials</Link>
        </li>
        <li class="nav-item">
          <Link to="/user" class="nav-link">Create User</Link>
        </li>
        <li class="nav-item">
          <Link to="/create" class="nav-link">Create Exercise Log</Link>
        </li>
        <li class="nav-item">
          <Link to="/About" class="nav-link">About us</Link>
        </li>
        </ul>
        
      </div>
    {/* </div> */}
  </nav>
    )
  }
}
