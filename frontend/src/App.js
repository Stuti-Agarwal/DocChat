import React, { useState } from 'react';
import ImageUploadPage from './ImageUploadPage';
import ResultsPage from './ResultsPage';
import ResponsiveAppBar from './navbar';

function App() {
  const [imageText, setImageText] = useState(null);

  const handleImageUploaded = (text) => {
    setImageText(text);
  }

  return (
    <div>
      <ResponsiveAppBar/>
      {imageText ? (
        <ResultsPage imageText={imageText} />  
      ) : (
        <ImageUploadPage onImageUploaded={handleImageUploaded} />
      )}
    </div>
  );
}

export default App;