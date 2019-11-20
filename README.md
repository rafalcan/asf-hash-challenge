# Anticipation Simulation Form

This project was created to discover the values of anticipation in a payment using a form to input the required like sale value, installments and MDR percentage.
This is part of a Challenge to enter in the Hash.

## Decisions
IN PROGRESS

## Run application
- First of all make sure you have Node installed and that you're using version 12+ by running: `node -v`.
- Before run the application you have to install dependencies: `npm install`.
- Now you can run the application using: `npm run serve` or `npm run serve:staging`.
- And then using this URL `http://localhost:8080/` to access the application, but the script will open for you.
- To shut the application down, enter the command `ctrl + c`.

## Available Scripts
In the root project directory, you can run:
*Before run the scripts see the section Run application*

##### `npm run serve`
Runs the app with mode development.
The url `http://localhost:8080/`, but the script will open for you.

##### `npm run serve:staging`
Runs the app with mode staging (production files).
The url `http://localhost:8080/`, but the script will open for you.

##### `npm run build`
Runs the build process and export for `/dist` folder.

##### `npm run test`
Runs the tests.

##### `npm run coverage`
Runs the tests in the mode coverage.

## Project Structure
```
src/                              source code
|- app/                           logic part of the source code
|- assets/                        assets (images, fonts, sounds, videos...)
|- index.html                     main html of the project
|- +- ...                         default files for favicon and indexation
webpack/                          webpack files for each env
.editorconfig                     editorconfig help to standarize the code
.eslintrc                         configuration file of eslint
.gitignore                        for prevent files from add in the commits
.htmlhintrc                       configuration file of htmlhint
index.js                          start file of application for Webpack
webpack.config.js                 for choose the correct env for run
package.json                      package configuration
```

### README of the Challenge
You can find here [CHALLENGE](https://github.com/hashlab/hiring/blob/master/challenges/pt-br/front-challenge.md).
