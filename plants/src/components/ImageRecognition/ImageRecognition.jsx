import React, { useState, useRef, useCallback } from 'react';
import Webcam from 'react-webcam';
import Tesseract from 'tesseract.js';

function App() {
  const [imageSrc, setImageSrc] = useState(null);
  const [resultText, setResultText] = useState('');
  const [loading, setLoading] = useState(false);
  const webcamRef = useRef(null);

  const captureImage = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageSrc(imageSrc);
    setResultText('');
    setLoading(true);
    Tesseract.recognize(
      imageSrc,
      'eng',
      {
        logger: (m) => console.log(m), // Optionally log progress
      }
    ).then(({ data: { text } }) => {
      setResultText(text);
      setLoading(false);
    }).catch(err => {
      console.error(err);
      setResultText('Error analyzing image');
      setLoading(false);
    });
  }, [webcamRef]);

  const searchGoogle = () => {
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(resultText)}`;
  };

  return (
    <div className="App">
      <h1> Recognition Plants </h1>
      {!imageSrc ? (
        <div>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={400}
          />
          <button onClick={captureImage}>Capture Photo</button>
        </div>
      ) : (
        <div>
          <img src={imageSrc} alt="Captured" width={400} />
          {loading ? (
            <p>Analyzing...</p>
          ) : (
            <div>
              <p>{resultText}</p>
              <button onClick={searchGoogle}>Search on Google</button>
              <button onClick={() => setImageSrc(null)}>Capture Another</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
