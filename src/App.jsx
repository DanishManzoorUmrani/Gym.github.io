import React from 'react';
import './App.css'
import GymHeader from './companents.jsx/GymHeader';
import Pilates from './companents.jsx/Pilates';
import PilatesStudio from './companents.jsx/PilatesStudio';
import Logos from './companents.jsx/Logos';
import Footer from './companents.jsx/Footer';

const App = () => {
  return (
    <div>

      <GymHeader
        imageUrl="https://cdn.pixabay.com/photo/2021/11/10/06/23/workout-6783020_640.jpg"
        gymName="Pubg Gym"
      />
      <Pilates />
      <PilatesStudio
        videoUrl="https://cdn.pixabay.com/video/2022/12/18/143431-782373969_tiny.mp4"
      />
      <Logos />
    <Footer />
    </div>
  );
}

export default App;
