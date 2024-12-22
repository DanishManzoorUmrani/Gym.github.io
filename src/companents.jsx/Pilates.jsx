import React from 'react';


function Pilates() {
  return (
    <div className="pilates-container">
      <div className="text-content">
        <h1>KARVE TRANSFORMER PILATES</h1>
        <p>
          Inspired by the Big Apple, on the pulse of the Big Smoke – we redefine the modern-day Pilates inspired workout at our Transformer Pilates studio. We capture that New York resilience and drive, tailored to the London lifestyle.
        </p>
        <p>
          Our 50-minute class is performed on our custom-made, resistance-based Transformer machines. Each class starts with a warm-up, followed by a full body high-intensity workout, and finishes with a stretch and a mindfulness session allowing for a full reset.
        </p>
        <p>
          The mind is at the forefront of our classes. We believe that a strong mind is the key to a strong body. Transform your mind into a ‘yes I can’ attitude and the results will speak for themselves. Our instructors are always there to motivate and lead the way, but it’s up to you to push through.
        </p>
        <button className="class-pack-button">Class Pack</button>
      </div>
      <div className="image-content">
        <img src="https://cdn.pixabay.com/photo/2016/11/19/12/43/barbell-1839086_640.jpg" alt="Pilates" className="pilates-image" />
      </div>
    </div>
  );
}

export default Pilates;
