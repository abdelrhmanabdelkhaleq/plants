
// import React from 'react';
// import ChatBot from 'react-chatbotify';
// import 'react-chatbotify/build/main.css';
// import { createChatBotMessage } from 'react-chatbotify';

// const config = {
//   initialMessages: [createChatBotMessage("Hello! How can I help you today?")],
//   botName: "HelperBot",
//   customComponents: {},
//   customStyles: {
//     botMessageBox: {
//       backgroundColor: "#376B7E",
//     },
//     chatButton: {
//       backgroundColor: "#5ccc9d",
//     },
//   },
// };

// const MessageParser = ({ children, actions }) => {
//   const parse = (message) => {
//     if (message.includes('hello')) {
//       actions.handleHello();
//     }
//   };

//   return (
//     <>
//       {React.Children.map(children, (child) => {
//         return React.cloneElement(child, {
//           parse: parse,
//           actions: {
//             handleHello: () => {
//               const botMessage = createChatBotMessage('Hello. Nice to meet you.');
//               actions.updateChatbotState(botMessage);
//             }
//           },
//         });
//       })}
//     </>
//   );
// };

// const ActionProvider = ({ createChatBotMessage, setState, children }) => {
//   const handleHello = () => {
//     const botMessage = createChatBotMessage('Hello. Nice to meet you.');
//     setState((prev) => ({
//       ...prev,
//       messages: [...prev.messages, botMessage],
//     }));
//   };

//   return (
//     <div>
//       {React.Children.map(children, (child) => {
//         return React.cloneElement(child, {
//           actions: {
//             handleHello,
//           },
//         });
//       })}
//     </div>
//   );
// };

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>React Chatbot Example</h1>
//       </header>
//       <ChatBot
//         config={config}
//         messageParser={MessageParser}
//         actionProvider={ActionProvider}
//       />
//     </div>
//   );
// }

// export default App;
