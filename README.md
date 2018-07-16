# NYT-React-App

#### Full stack React application using the New York Times article search API

###### This application requires a New York Times API key which can be requested at https://developer.nytimes.com/signup

This is a React web application which allows users to search, save, and comment on articles searched from the NYTimes article archive. It is created using the React JavaScript library on the front end and an Express.js server on the back end which connects to a No-SQL, MongoDB database using the Mongoose ORM. A proxy script and the concurrently npm package are required to configure the application properly. Article links and any articles are saved to the database, but the actual text of the articles themselves must be accessed on the New York Times' official website.
