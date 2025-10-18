import { useState } from 'react'
import './App.css'
import ProfileContainer from "./components/ProfileContainer"
import { profileArray } from './components/data.js'
import Header from "./components/Header";


function App() {
  return (
      <div className="card-grid">
        <Header />
        <ProfileContainer profiles={profileArray} />
      </div>
  );
}

export default App;

