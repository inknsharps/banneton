![top-lang](https://img.shields.io/github/languages/top/inknsharps/banneton)
![license](https://img.shields.io/github/license/inknsharps/banneton)

# Banneton - A Social Media Platform for Bread Bakers

## Description

Banneton is a bread baking focused social media platform built with the MERN stack ([MongoDB](https://www.mongodb.com/), [Express](http://expressjs.com/), [React](https://reactjs.org/) and [Node.js](https://nodejs.dev/)), that lets you search and share recipes, images, and engage in discussion. In addition, the application also features some tools to help you along your baking journey. A deployed version can be found [here](https://limitless-hamlet-15762.herokuapp.com/#/).

## Installation

To install and run this application locally, you can either run a development build, or create a production build. The development build will run slower than the production since it will be using unminified Javascript files, and the entirety of the Tailwind CSS stylesheet.

### Development Build

1. Make sure you have [Node.js](https://nodejs.dev/) installed on your local machine.
2. You will need to have a MongoDB server installed on your local machine to access the data locally. You can install the community version [here](https://www.mongodb.com/try/download/community).
3. Then clone or download the repository. There are two folders in this repository, one for the front end ( `/client` ) and one for the backend ( `/api` ). Each has their own `package.json`, so you will need to install dependencies for both directories.
```
	// Navigate into the client directory, and run npm install
	cd ./client
    npm install

	// Navigate into the server directory, and run npm install
	cd ./server
	npm install
```
4. You'll need to set up a `.env` file in the `./server` directory, containing the [Cloudinary](https://cloudinary.com/) info you need. Make sure to sign up for an account and get the corresponding infomation, and set up your file like so:
```
    CLOUDINARY_URL=
    CLOUD_NAME=
    API_KEY=
    API_SECRET=
```
5. You'll have to also run both servers that are running on `localhost:3000` (front end), and `localhost:3001` by running the following:
```
	// Navigate into the server directory, and run npm start
	cd ./server
    npm start

	// Navigate into the client directory, and run npm start
	cd ./client
    npm start
```
6. After which, you can open up `localhost:8080` on your web browser to view and use the application.

### Production Build

1. Alternatively, if you want to try out a production build, run `npm run build` in the `./client` directory after installing all the dependencies:
```
	cd ./client
	npm run build
```
2. This will create a new `./build` folder in the `./client` directory. Cut and paste that directory into the root directory of `./server`.
3. Now run `npm start` in the `./server` directory. It will launch a production build of the application on `localhost:3001`.

## Usage

Usage examples of the application coming soon.

## Contributing

Feel free to fork and make pull requests for any features you would like added. For any fixes or bugs, please submit an [issue](https://github.com/inknsharps/banneton/issues).