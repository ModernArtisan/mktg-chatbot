import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from 'styled-components';

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#222',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#17a',
  botFontColor: '#fff',
  userBubbleColor: '#777',
  userFontColor: '#fff',
};
const config = {
      width: "300px",
      height: "500px",
      floating: true,
      headerTitle : "ModernEdge Chatbot",
  };

function CustomChatbot(props) {
    
    const steps = [
        {
           id: "Greet",
           message: "Hello, Welcome to our Modern Edge Mktg",
           trigger: "Ask Name"
        },
        {
           id: "Ask Name",
           message: "With whom am I chatting?",
           trigger: "Waiting user input for name",
        },
        {
           id: "Waiting user input for name",
           user: true,
           trigger: "Active listen",
        },
        {
           id: "Active listen",
           message: "Hello {previousValue}, it's a pleasure.",
           trigger: "Asking options to eat" 

        },{
          id: "Asking options to eat",
          message: "Would you like to start Your Enrollment Application...?",
          trigger: "Optin" 

       }, {
        id: "Optin",
        options:[{
          value: true,
          label: "Sure!",
          trigger: "Go on" 
        },  { 
          value: "false",
          label: "No",
          trigger: "Other Options"
        } 
      ]
}, {
  id: "Other Options",
  message: "Sorry, We don't have other options available at the moment. Would you like to try our chatbot further?",
  trigger: "Reconfirmation"
},{
id: "Reconfirmation",
options: [
           {
             value: true,
             label: "Yes",
             trigger: "Go on"
           },
           { 
             value: "false",
             label: "No",
             trigger: "Done"
           } 
         ]
},{
  id: "Go on",
  message: "We'll start by asking a few brief questions, and then scheduling your call.",
  trigger: "prompt email" 
 },
        {
          id: "prompt email",
          message: "What's your Email Address?",
          trigger: "Waiting for user email input"
       },{
         id: "Waiting for user email input", 
        user: true,
        trigger: "Repeat that"
       },
        { 
            id: "Repeat that",
            message: "{previousValue}.  Great. Last one, what's your Mobile Number? ",
            trigger: "Wait four" 
         }, {
          id: "Wait four", 
         user: true,
         trigger: "Repeat four"
        },{ 
          id: "Repeat four",
          message: "{previousValue}",
          trigger: "Go five" 
       },{
          id:  "Go five", 
          message: "Okay. Now for some questions about your agency.   Click on Continue",
          trigger: "Continue", 
        },{

          id: "Continue",
          options: [
                     {
                       value: true,
                       label: "Continue",
                       trigger: "six"
                     },
                     { 
                       value: "burger",
                       label: "Let me ask something else.",
                       trigger: "Not available"
                     } 
                   ]
       }, {
        id: "Not available",
        message: "Sorry, We don't have other options available at the moment. Would you like to try our chatbot further?",
        trigger: "Reconfirming"
     },{
      id: "Reconfirming",
      options: [
                 {
                   value: true,
                   label: "Yes",
                   trigger: "six"
                 },
                 { 
                   value: "false",
                   label: "No",
                   trigger: "Done"
                 } 
               ]
   }, {
          id: "six", 
          message:"So, what's your Agency Name? ",
          trigger: "Wait six", 
        },{
          id: "Wait six", 
         user: true,
         trigger: "seven"
        },{ 
          id: "seven", 
          message: "Awesome name! What's {previousValue} website URl? ",
          trigger: "Wait seven", 
        },{
          id: "Wait seven", 
         user: true,
         trigger: "eight"
        },{
          id: "eight", 
          message: "What's your Agency Niche? ",
          trigger: "Wait eight", 
        },{
          id: "Wait eight", 
         user: true,
         trigger: "nine"
        },{
          id: "nine", 
          message: "Ok, {previousValue}, What's the #1 challenge holding back your agency growth right now? ",
          trigger: "Wait nine", 
        },{
          id: "Wait nine", 
         user: true,
         trigger: "ten"
        },{
          id: "ten", 
          message: "What's your agencies current monthly revenue? ",
          trigger: "Wait ten", 
        },{
          id: "Wait ten", 
         user: true,
         trigger: "Asking for Tomatoes in Pizza"
        },{
           id: "Asking for Tomatoes in Pizza",
           message: "Would you like to have tomatoes in your pizza",
           trigger: "Adding Tomatoes in Pizza"
        },
        {
           id: "Adding Tomatoes in Pizza",
           options: [
                      {
                        value: true,
                        label: "Yes",
                        trigger: () => {
                           props.eventHandler("tomato","true");
                           return "Asking for Mushroom in Pizza"  
                         }
                      },
                      { 
                        value: "false",
                        label: "No",
                        trigger: () => {
                            props.eventHandler("tomato","false");
                            return "Asking for Mushroom in Pizza"  
                        }
                        // trigger: "Asking for Mushroom in Pizza"
                      } 
                    ]
        },
        
        {
           id: "Asking for Mushroom in Pizza",
           message: "Would you like to have mushroom in your pizza",
           trigger: "Adding Mushroom in Pizza"
        },
 
        {
           id: "Adding Mushroom in Pizza",
           options: [
                      {
                        value: true,
                        label: "Yes",
                        trigger: () => {
                           props.eventHandler("mushroom","true");
                           return "Asking for Corn in Pizza"  
                         }
                      },
                      { 
                        value: "false",
                        label: "No",
                        trigger: () => {
                            props.eventHandler("mushroom","false");
                            return "Asking for Corn in Pizza"  
                        }
                        // trigger: "Asking for Corn in Pizza"
                      } 
                    ]
        },
        {
           id: "Asking for Corn in Pizza",
           message: "Would you like to have corn in your pizza",
           trigger: "Adding Corn in Pizza"
        },
 
        {
           id: "Adding Corn in Pizza",
           options: [
                      {
                        value: true,
                        label: "Yes",
                        trigger: () => {
                           props.eventHandler("corn","true");
                           return "Asking for Veggies in Pizza"  
                         }
                      },
                      { 
                        value: "false",
                        label: "No",
                        trigger: () => {
                            props.eventHandler("corn","false");
                            return "Asking for Veggies in Pizza"  
                        }
                        // trigger: "Asking for Veggies in Pizza"
                      } 
                    ]
        },
         
        {
           id: "Asking for Veggies in Pizza",
           message: "Would you like to have veggies in your pizza",
           trigger: "Adding Veggies in Pizza"
        },
 
        {
           id: "Adding Veggies in Pizza",
           options: [
                      {
                        value: true,
                        label: "Yes",
                        trigger: () => {
                           props.eventHandler("veggie","true");
                           return "Done"  
                         }
                      },
                      { 
                        value: "false",
                        label: "No",
                        trigger: () => {
                            props.eventHandler("veggie","false");
                            return "Done"  
                        }
                        // trigger: "Done"
                      } 
                    ]
        },
        {
            id: "Done",
            message: "Have a great day !!",
            end: true
        }
];
    
    return (
      <ThemeProvider theme={theme}>
        <ChatBot steps={steps} {...config}
          //  speechSynthesis={{ enable: true, lang: 'en' }}
         />
      </ThemeProvider>
  );
}
export default CustomChatbot;