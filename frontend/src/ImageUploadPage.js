// // ImageUploadPage.js

// import React, { useState } from 'react';
// import axios from 'axios';

// function ImageUploadPage({ onImageUploaded }) {
//   const [image, setImage] = useState(null);

//   const handleImageUpload = (e) => {
//     const imageFile = e.target.files[0];
//     setImage(imageFile);
//   }


//   const handleSubmit = async () => {
//     if (image) {
//       const formData = new FormData();
//       formData.append('image', image);

//       try {
//         const response = await axios.post('http://localhost:5000/ocr', formData);
//         console.log(response)
//         if (response.status === 200) {
//           onImageUploaded(response.data);
//         } else {
//           console.error('Error processing OCR');
//         }
//       } catch (error) {
//         console.error('Error communicating with the server', error);
//       }
//     }
//   };

//   // const handleSubmit = () => {
//   //   // Send image to backend API
//   //   const formData = new FormData();
//   //   formData.append('image', image);

//   //   fetch('https://localhost:5000/ocr', {
//   //     method: 'POST',
//   //     body: formData
//   //   })
//   //   .then(res => res.json())
//   //   .then(data => {
//   //     // Move to next page and pass text data
//   //     onImageUploaded(data.text); 
//   //   });
//   // }

//   return (
//     <div>
//       <input type="file" onChange={handleImageUpload} />
//       <button onClick={handleSubmit}>Upload</button>
//     </div>
//   );
// }

// export default ImageUploadPage;


// ImageUploadPage.js

import React, { useState } from 'react';
import axios from 'axios';
import './ImageUploadPage.css'; // Import your custom CSS file

function ImageUploadPage({ onImageUploaded }) {
  const [file, setFile] = useState(null);

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
  };

  const handleSubmit = async () => {
    if (!file) {
      return; // No file selected
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      let response;

      if (file.type === 'image/jpeg' || file.type === 'image/png') {
        response = await axios.post('http://localhost:5000/ocr/image', formData);
      } else if (file.type === 'application/pdf') {
        response = await axios.post('http://localhost:5000/ocr/pdf', formData);
      } else if (file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        response = await axios.post('http://localhost:5000/ocr/docx', formData);
      } else {
        console.error('Unsupported file type');
        return;
      }

      if (response.status === 200) {
        onImageUploaded(response.data);
      } else {
        console.error('Error processing file');
      }
    } catch (error) {
      console.error('Error communicating with the server', error);
    }
  };

  return (
    <div className="upload-container">
      <input type="file" onChange={handleFileUpload} className="file-input" />
      <button onClick={handleSubmit} className="upload-button">
        Upload
      </button>
    </div>
  );
}

export default ImageUploadPage;
