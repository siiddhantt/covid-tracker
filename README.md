# CovidTracker

CovidTracker is a web-app which provides real-time updates and stats for the Covid-19 cases around the world. 
It's built using React.js for the frontend and the backend is handled using Node.js and Express.


### Screenshots
![2022-06-01_18-19](https://user-images.githubusercontent.com/47355538/171408439-46bf4e77-48ba-4cb9-ac91-c7121aa1e662.png)
![2022-06-01_18-20](https://user-images.githubusercontent.com/47355538/171408503-489061a7-d403-4c9e-9ac0-615dd2e4346e.png)
![2022-06-01_18-20_1](https://user-images.githubusercontent.com/47355538/171408531-26904821-1662-464e-81ce-2d93bf3002a7.png)

## Deployed app

```sh
https://googlesheet-quiz.netlify.app/
```

## Features

- Connected backend to a Google Sheets to fetch all the data and pass it to the database as JSON.
- MongoDB stores the data and updates the previous data.
- Fetches all the questions with their types and answers and display any random 10 out of them on UI.
- Fully functional flow of quiz and anyone can appear the quiz and check their score and answers as well on UI.
- The database also gets automatically updated every hour.

## Frameworks used
- React.js
- Node.js
- Express
- Tailwind CSS
- Material UI 
- MongoDB as the database


## Installation 

- Fork the repository and clone it.
-  Node.js should be installed on the system.
-  After cloning the repository run command `npm install`.
- Start the app using `npm start` command.
- Start the backend by `nodemon ./index.js`
