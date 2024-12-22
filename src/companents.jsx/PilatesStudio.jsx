import React from 'react';

function PilatesStudio({ videoUrl }) {
  return (
    <div className="pilates-studio-container">
      <div className="video-content">
        <iframe 
          src={videoUrl}
          title="Pilates Studio Video"
          className="pilates-video"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div className="text-content">
        <h1>Transformer Pilates Studio</h1>
        <p>
          With the lights turned low, and the music cranked high, exhilarating beats pulsate from our urban loft style studio centered around our custom made KARVE Transformer machines. Powered by our high energy and passionate instructors, our studio experience will transform your body and mind with intentional and expertly executed Pilates-based sequences, leading to maximum results. Our machines are configured to offer a range of resistance levels to challenge you as you make your way through our 50-minute class.
        </p>
      </div>
    </div>
  );
}

export default PilatesStudio;
