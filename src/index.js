import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import bridge from "@vkontakte/vk-bridge";
let sid_user;

console.log("Test data");
bridge.send("VKWebAppInit");


bridge.send('VKWebAppGetUserInfo')
.then(data => {
//console.log(data.id);
//console.log(data.first_name);
//console.log(data.last_name);
//console.log(data);

sid_user  = (data.id);


       
})
.catch(error => {

});



ReactDOM.render(
<React.StrictMode>
  <App />
</React.StrictMode>,
  document.getElementById('root')
);

