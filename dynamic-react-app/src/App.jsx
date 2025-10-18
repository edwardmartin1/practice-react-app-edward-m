import { useState } from 'react'
import './App.css'
import ProfileContainer from "./components/ProfileContainer"
import { profileArray } from './components/data.js'


function App() {
  return (
      <div>
        <h1>My React App</h1>

        <ProfileContainer profiles={profileArray} />
      </div>
  );
}

export default App;

