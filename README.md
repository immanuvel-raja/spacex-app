# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

due to the time constraint i haven't deployed but we can deploy it any time.i have been using netlify for most of my projects

### `frameworks`

As mentioned on the mail, i haven't used any third party libraries.

simply used react-router-dom and for the styling i have used styled components coded by me not any other css frameworks

### `Architecture`

for the navigation created a separate components so we can reuse them called MainHeader.js

for routing between pages created a separate folder called pages and coded all the routing components there.

for the detailed pages of rockets and launches tab created a components under components folder

used fetch api for getting data from api

used async function to retrieve the promises easily.

pushed those data into an new array and mapped that array based on the key then send that new array as a prop to different component.

becausue of clean coding i have been used separate component for rendering list data

same procedure repeated for the launches tab

haven't used most of the styling and modern design

as you know already this is my first test so i have completed my side of work

### `how can we improve`

in the homepage, we can put a button if we click that then it will redirect to particular news or article page.

in the rocket tab,we can list all the items as a card same goes for the detailed page.

......................................................................................
