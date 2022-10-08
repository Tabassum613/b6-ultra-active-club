import React from 'react';
import './App.css'
import Navbar from './Component/Navbar/Navbar';
import AllExercise from './Component/AllExercise/AllExercise';
import Blog from './Component/Blog/Blog';



const App = () => {
  return (
    <div>
      <div className='app' style={{ background: "rgba(211, 211, 211, 0.2)" }}>
        <Navbar></Navbar>
        <div style={{ marginTop: "70px" }}>
          <AllExercise></AllExercise>

        </div>
      </div>
      <div><Blog></Blog></div>
    </div>
  );
};

export default App;