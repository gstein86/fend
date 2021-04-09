# Evaluate a News Article with Natural Language Processing

The purpose of this project is to build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites.

This project is based on the *evaluate-news-nlp* starter code provided by Udacity for the *Front End Web Developer Nanodegree Program*.

## Technologies and tools
* HTML
* CSS/SCSS
* JavaScript
* Node
* Express
* Webpack
* meaningcloud API
* Workbox
* Jest

## Installation
Ensure Node and npm are installed
```
node -v
npm -v
```

1. Open project directory
```
cd <project directory>
```
2. Install npm
```
npm install
```
3. Install loaders and plugins for development mode
```
# Choose the necessary installation for your development mode
npm i -D @babel/core @babel/preset-env babel-loader
npm i -D style-loader node-sass css-loader sass-loader
npm i -D clean-webpack-plugin
npm i -D html-webpack-plugin
npm i -D mini-css-extract-plugin
npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin
```
4. Sign up for API key at [meaningcloud.com](https://www.meaningcloud.com/developer/sentiment-analysis)

5. Use dotenv to configure API key as environment variable
	* Install dotenv package
	```
	npm install dotenv
	```
	* Create a new `.env` file in the root of your project
	* Fill the `.env` file with your API key like this:
	```
	API_KEY=********************************
	```
6. Run the project

Commands
* `npm run build-prod`: Build project in production mode
* `npm run build-dev`: Build project in development mode
* `npm start`: Run project

7. Open favourite browser at http://localhost:8080/

## Usage
* Put a Url of an article or directly a text with up to 5000 characters into the input box on the page.
* Click the *submit* button to start the language analysis.
* Once the analysis result provided by the meaningcloud API is received, it will be displayed on the page.

## Author
G. Stein, 2021
