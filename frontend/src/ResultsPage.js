// // ResultsPage.js

// import React from 'react';
// import Chatbot from './Chatbot';

// function ResultsPage({ imageText }) {
//   return (
//     <div>
//       <div>{imageText}</div>

//       <Chatbot context = {imageText} />
//     </div>  
//   );
// }

// export default ResultsPage;


// ResultsPage.js

import React from 'react';
import Chatbot from './Chatbot';

// Import styles
import './Chatbot.css'; 
import './ResultsPage.css';




function ResultsPage({ imageText }) {
  return (
    <div>
<div className="results">
  {/* <div className="image-text">{imageText}</div> */}

  <Chatbot context = {imageText} />
</div>
    </div>  
  );
}

export default ResultsPage;