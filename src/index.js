import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

export const dialogsData = [
	{ id: 1, name: "Masha" },
	{ id: 2, name: "Maxim" },
	{ id: 3, name: "Alexey" },
	{ id: 4, name: "Sasha" },
	{ id: 5, name: "Vlad" },
	{ id: 6, name: "Valera" },
  ];
  
  export const messagesData = [
	{ id: 1, message: "Hey" },
	{ id: 2, message: "Do you feel ok?" },
	{ id: 3, message: "How you doing?" },
	{ id: 4, message: "WTF" },
	{ id: 5, message: "How is your it-kamasutra" },
	{
	  id: 6,
	  message:
		"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam unde dolore perspiciatis voluptate non odit esse? Consequuntur doloremque animi corrupti at suscipit vitae, magnam officia unde facere, voluptatem, perferendis fuga.",
	},
  ];

  export const postData = [
    { id: 1, message: "Hi! How are you", likesCount: "7" },
    { id: 2, message: "It`s my first post", likesCount: "42" },
  ];
  
//   Экспортируем data файлы через props ДО reactDOM, иначе будет ошибка  

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



