(window["webpackJsonpreact-chatbotme"]=window["webpackJsonpreact-chatbotme"]||[]).push([[0],{17:function(e,t,a){e.exports=a(31)},22:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),s=a.n(i),o=(a(22),a(23),a(8)),l=a(9),c=a(13),m=a(10),g=a(14),u=(a(24),a(1)),d=a.n(u),v=a(2),E={background:"#f5f8fb",fontFamily:"Helvetica Neue",headerBgColor:"#222",headerFontColor:"#fff",headerFontSize:"15px",botBubbleColor:"#17a",botFontColor:"#fff",userBubbleColor:"#777",userFontColor:"#fff"},f={width:"300px",height:"500px",floating:!0,headerTitle:"ModernEdge Chatbot"};var h=function(e){var t=[{id:"Greet",message:"Hello, Welcome to our Modern Edge Mktg",trigger:"Ask Name"},{id:"Ask Name",message:"With whom am I chatting?",trigger:"Waiting user input for name"},{id:"Waiting user input for name",user:!0,trigger:"Active listen"},{id:"Active listen",message:"Hello {previousValue}, it's a pleasure.",trigger:"Asking options to eat"},{id:"Asking options to eat",message:"Would you like to start Your Enrollment Application...?",trigger:"Optin"},{id:"Optin",options:[{value:!0,label:"Sure!",trigger:"Go on"},{value:"false",label:"No",trigger:"Other Options"}]},{id:"Other Options",message:"Sorry, We don't have other options available at the moment. Would you like to try our chatbot further?",trigger:"Reconfirmation"},{id:"Reconfirmation",options:[{value:!0,label:"Yes",trigger:"Go on"},{value:"false",label:"No",trigger:"Done"}]},{id:"Go on",message:"We'll start by asking a few brief questions, and then scheduling your call.",trigger:"prompt email"},{id:"prompt email",message:"What's your Email Address?",trigger:"Waiting for user email input"},{id:"Waiting for user email input",user:!0,trigger:"Repeat that"},{id:"Repeat that",message:"{previousValue}.  Great. Last one, what's your Mobile Number? ",trigger:"Wait four"},{id:"Wait four",user:!0,trigger:"Repeat four"},{id:"Repeat four",message:"{previousValue}",trigger:"Go five"},{id:"Go five",message:"Okay. Now for some questions about your agency.   Click on Continue",trigger:"Continue"},{id:"Continue",options:[{value:!0,label:"Continue",trigger:"six"},{value:"burger",label:"Let me ask something else.",trigger:"Not available"}]},{id:"Not available",message:"Sorry, We don't have other options available at the moment. Would you like to try our chatbot further?",trigger:"Reconfirming"},{id:"Reconfirming",options:[{value:!0,label:"Yes",trigger:"six"},{value:"false",label:"No",trigger:"Done"}]},{id:"six",message:"So, what's your Agency Name? ",trigger:"Wait six"},{id:"Wait six",user:!0,trigger:"seven"},{id:"seven",message:"Awesome name! What's {previousValue} website URl? ",trigger:"Wait seven"},{id:"Wait seven",user:!0,trigger:"eight"},{id:"eight",message:"What's your Agency Niche? ",trigger:"Wait eight"},{id:"Wait eight",user:!0,trigger:"nine"},{id:"nine",message:"Ok, {previousValue}, What's the #1 challenge holding back your agency growth right now? ",trigger:"Wait nine"},{id:"Wait nine",user:!0,trigger:"ten"},{id:"ten",message:"What's your agencies current monthly revenue? ",trigger:"Wait ten"},{id:"Wait ten",user:!0,trigger:"Asking for Tomatoes in Pizza"},{id:"Asking for Tomatoes in Pizza",message:"Would you like to have tomatoes in your pizza",trigger:"Adding Tomatoes in Pizza"},{id:"Adding Tomatoes in Pizza",options:[{value:!0,label:"Yes",trigger:function(){return e.eventHandler("tomato","true"),"Asking for Mushroom in Pizza"}},{value:"false",label:"No",trigger:function(){return e.eventHandler("tomato","false"),"Asking for Mushroom in Pizza"}}]},{id:"Asking for Mushroom in Pizza",message:"Would you like to have mushroom in your pizza",trigger:"Adding Mushroom in Pizza"},{id:"Adding Mushroom in Pizza",options:[{value:!0,label:"Yes",trigger:function(){return e.eventHandler("mushroom","true"),"Asking for Corn in Pizza"}},{value:"false",label:"No",trigger:function(){return e.eventHandler("mushroom","false"),"Asking for Corn in Pizza"}}]},{id:"Asking for Corn in Pizza",message:"Would you like to have corn in your pizza",trigger:"Adding Corn in Pizza"},{id:"Adding Corn in Pizza",options:[{value:!0,label:"Yes",trigger:function(){return e.eventHandler("corn","true"),"Asking for Veggies in Pizza"}},{value:"false",label:"No",trigger:function(){return e.eventHandler("corn","false"),"Asking for Veggies in Pizza"}}]},{id:"Asking for Veggies in Pizza",message:"Would you like to have veggies in your pizza",trigger:"Adding Veggies in Pizza"},{id:"Adding Veggies in Pizza",options:[{value:!0,label:"Yes",trigger:function(){return e.eventHandler("veggie","true"),"Done"}},{value:"false",label:"No",trigger:function(){return e.eventHandler("veggie","false"),"Done"}}]},{id:"Done",message:"Have a great day !!",end:!0}];return r.a.createElement(v.ThemeProvider,{theme:E},r.a.createElement(d.a,Object.assign({steps:t},f)))};var N=function(e){return r.a.createElement(d.a,{steps:[{id:"Greet",message:"Hello, Welcome to Modern Edge Marketing",trigger:"Reccommend"},{id:"Reccommend",message:"Use chatbot for HELP",trigger:"Breach"},{id:"Breach",message:"Ready? Click the button below now.",end:!0}],speechSynthesis:{enable:!0,lang:"en"}})};a(30);var b=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"pizza-base-1"}),r.a.createElement("div",{className:"pizza-base-2"}),r.a.createElement("div",{className:"slice-base-1"}),r.a.createElement("div",{className:"slice-base-2"}))};var p=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"tomatoes"},r.a.createElement("div",{className:"tomato-1"}),r.a.createElement("div",{className:"tomato-2"}),r.a.createElement("div",{className:"tomato-3"}),r.a.createElement("div",{className:"tomato-4"}),r.a.createElement("div",{className:"tomato-5"}),r.a.createElement("div",{className:"tomato-6"}),r.a.createElement("div",{className:"tomato-7"}),r.a.createElement("div",{className:"tomato-8"})),r.a.createElement("div",{className:"tomatoes"},r.a.createElement("div",{className:"tomato-9"}),r.a.createElement("div",{className:"tomato-10"})))};var y=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"mushrooms"},r.a.createElement("div",{className:"cup-1"}),r.a.createElement("div",{className:"stem-1"}),r.a.createElement("div",{className:"cup-2"}),r.a.createElement("div",{className:"stem-2"}),r.a.createElement("div",{className:"cup-3"}),r.a.createElement("div",{className:"stem-3"}),r.a.createElement("div",{className:"cup-4"}),r.a.createElement("div",{className:"stem-4"}),r.a.createElement("div",{className:"cup-5"}),r.a.createElement("div",{className:"stem-5"}),r.a.createElement("div",{className:"cup-6"}),r.a.createElement("div",{className:"stem-6"}),r.a.createElement("div",{className:"cup-7"}),r.a.createElement("div",{className:"stem-7"})),r.a.createElement("div",{className:"mushrooms"},r.a.createElement("div",{className:"cup-8"}),r.a.createElement("div",{className:"stem-8"})))};var z=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"corns"},r.a.createElement("div",{className:"corn-1"}),r.a.createElement("div",{className:"corn-2"}),r.a.createElement("div",{className:"corn-3"}),r.a.createElement("div",{className:"corn-4"}),r.a.createElement("div",{className:"corn-5"}),r.a.createElement("div",{className:"corn-6"}),r.a.createElement("div",{className:"corn-7"}),r.a.createElement("div",{className:"corn-8"}),r.a.createElement("div",{className:"corn-9"}),r.a.createElement("div",{className:"corn-10"}),r.a.createElement("div",{className:"corn-11"})),r.a.createElement("div",{className:"corns"},r.a.createElement("div",{className:"corn-11"})))};var k=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"vegies"},r.a.createElement("div",{className:"veg-1"}),r.a.createElement("div",{className:"veg-2"}),r.a.createElement("div",{className:"veg-3"}),r.a.createElement("div",{className:"veg-4"}),r.a.createElement("div",{className:"veg-5"}),r.a.createElement("div",{className:"veg-6"}),r.a.createElement("div",{className:"veg-7"}),r.a.createElement("div",{className:"veg-8"}),r.a.createElement("div",{className:"veg-9"}),r.a.createElement("div",{className:"veg-10"}),r.a.createElement("div",{className:"veg-11"}),r.a.createElement("div",{className:"veg-12"}),r.a.createElement("div",{className:"veg-13"})),r.a.createElement("div",{className:"vegies"},r.a.createElement("div",{className:"veg-14"})))};var W=function(e){var t={width:"600px"};return r.a.createElement("div",null,r.a.createElement("div",{className:"d-flex justify-content-center mt-3 mb-3"},r.a.createElement("button",{className:"btn btn-danger btn-block",style:t,onClick:function(){e.eventHandler("tomato","btn")}},"Add/Remove Tomato")),r.a.createElement("div",{className:"d-flex justify-content-center mt-3 mb-3"},r.a.createElement("button",{className:"btn btn-secondary btn-block",style:t,onClick:function(){e.eventHandler("mushroom","btn")}},"Add/Remove Mushroom")),r.a.createElement("div",{className:"d-flex justify-content-center mt-3 mb-3"},r.a.createElement("button",{className:"btn btn-warning btn-block",style:t,onClick:function(){e.eventHandler("corn","btn")}},"Add/Remove Corn")),r.a.createElement("div",{className:"d-flex justify-content-center mt-3 mb-3"},r.a.createElement("button",{className:"btn btn-success 1-block",style:t,onClick:function(){e.eventHandler("veggie","btn")}},"Add/Remove Veggie")))},A=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={tomato:!1,mushroom:!1,veggie:!1,corn:!1},a.clickEventHandler=function(e,t){"btn"==t?"tomato"===e?a.setState({tomato:!a.state.tomato}):"mushroom"===e?a.setState({mushroom:!a.state.mushroom}):"corn"===e?a.setState({corn:!a.state.corn}):a.setState({veggie:!a.state.veggie}):"tomato"===e?a.setState({tomato:"true"==t}):"mushroom"===e?a.setState({mushroom:"true"==t}):"corn"===e?a.setState({corn:"true"==t}):a.setState({veggie:"true"==t})},a}return Object(g.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.tomato&&r.a.createElement(p,null),t=this.state.mushroom&&r.a.createElement(y,null),a=this.state.corn&&r.a.createElement(z,null),n=this.state.veggie&&r.a.createElement(k,null);return r.a.createElement("div",null,r.a.createElement("div",{className:"container mt-5"},r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",{className:"plate"},r.a.createElement(b,null),e,t,a,n)),r.a.createElement(W,{eventHandler:this.clickEventHandler}),r.a.createElement("div",{style:{display:"none"}},r.a.createElement(N,null)),r.a.createElement(h,{eventHandler:this.clickEventHandler})))}}]),t}(n.Component);var w=function(){return r.a.createElement(A,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.dd505068.chunk.js.map