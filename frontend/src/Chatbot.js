// // Chatbot.js

// import React, { useState } from 'react';
// import axios from 'axios';

// function Chatbot() {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');

//   const handleSend = async () => {
//     const message = {
//       text: input,
//       sender: 'user'
//     }

//     setMessages([...messages, message]);
//     setInput('');

//     const response = await fetchBotResponse(input);

//     setMessages([...messages, response]);
//   }


// const fetchBotResponse = async (message) => {
//   try {
//     console.log(message);

//     const formData = new FormData();
//     formData.append('text', message);


//     // console.log(formData);

//     // Call backend API to get bot response
//     const response = await axios.post('http://localhost:5000/api', formData);
//     console.log(response);
//     return {
//       text: response.data,
//       sender: 'bot'
//     };
//   } catch (error) {
//     console.error('Error fetching bot response', error);
//     return {
//       text: 'An error occurred while fetching bot response.',
//       sender: 'bot'
//     };
//   }
// };




//   return (
//     <div>
//       <div className="message-list">
//         {messages.map(msg => (
//           <Message 
//             text={msg.text} 
//             sender={msg.sender} 
//           />
//         ))}
//       </div>

//       <input 
//         value={input}
//         onChange={e => setInput(e.target.value)}  
//       />

//       <button onClick={handleSend}>Send</button>
//     </div>
//   );
// }

// // Message component to render each message
// function Message({ text, sender }) {
//   return (
//     <div className={`message ${sender}`}>
//       {text}
//     </div>
//   );
// }

// export default Chatbot;

import React, { useState } from 'react';
import axios from 'axios';

function Chatbot({context}) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    const userMessage = {
      text: input,
      sender: 'user'
    };

    setMessages([...messages, userMessage]);
    setInput('');

    const botResponse = await fetchBotResponse(input);

    setMessages([...messages, userMessage, botResponse]);
  };

  const fetchBotResponse = async (message) => {
    try {
      const formData = new FormData();
      // message= "'" + context +". " + "'"+message
      formData.append('text', message);
  
      // Call backend API to get bot response
      const response = await axios.post('http://localhost:5000/api', formData);

      return {
        text: response.data,
        sender: 'bot'
      };
    } catch (error) {
      console.error('Error fetching bot response', error);
      return {
        text: 'An error occurred while fetching bot response.',
        sender: 'bot'
      };
    }
  };

  return (
    <div>
      <div className="message-list">
        {messages.map((msg, index) => (
          <Message key={index} text={msg.text} sender={msg.sender} />
        ))}
      </div>

      <div className="input-container">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

// Message component to render each message
function Message({ text, sender }) {
  return (
    <div className={`message ${sender}`}>
      {text}
    </div>
  );
}

export default Chatbot;



// import React, { useState } from 'react';
// import axios from 'axios';

// function Chatbot() {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');

//   const handleSend = async () => {
//     const userMessage = {
//       text: input,
//       sender: 'user'
//     };

//     setMessages([...messages, userMessage]);
//     setInput('');

//     const botResponse = await fetchBotResponse(input);

//     setMessages([...messages, botResponse]);
//   };

//   const fetchBotResponse = async (message) => {
//     try {

//           const formData = new FormData();
//     formData.append('text', message);

//     // Call backend API to get bot response
//     const response = await axios.post('http://localhost:5000/api', formData);


//       return {
//         text: response.data,
//         sender: 'bot'
//       };
//     } catch (error) {
//       console.error('Error fetching bot response', error);
//       return {
//         text: 'An error occurred while fetching bot response.',
//         sender: 'bot'
//       };
//     }
//   };

//   return (
//     <div>
//       <div className="message-list">
//         {messages.map((msg, index) => (
//           <Message key={index} text={msg.text} sender={msg.sender} />
//         ))}
//       </div>

//       <div className="input-container">
//         <input
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//         />
//         <button onClick={handleSend}>Send</button>
//       </div>
//     </div>
//   );
// }

// // Message component to render each message
// function Message({ text, sender }) {
//   return (
//     <div className={`message ${sender}`}>
//       {text}
//     </div>
//   );
// }

// export default Chatbot;

