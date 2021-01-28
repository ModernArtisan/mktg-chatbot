import React from "react";
import ChatBot from "react-simple-chatbot";

function HiddenChatbot(props) {
    const steps = [
        {
           id: "Greet",
           message: "Hello, Welcome to Modern Edge Marketing",
           trigger: "Reccommend",
        },
        {
          id: "Reccommend",
          message: "Use chatbot for HELP",
          trigger: "Breach",
        },
        {
          id: "Breach",
          message: "Ready? Click the button below now.",
          end: true 
          
          }
];
    
    return (
        <ChatBot steps={steps}
           speechSynthesis={{ enable: true, lang: 'en' }}
        />
  );
}
export default HiddenChatbot;