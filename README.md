# Minimal Webpack React/Babel Boilerplate

## Setup
`cd ./node-react-babel-stack`,
`npm install`

`cd ./server`
`npm install`

Frontend files are contained in the `frontend/src` directory.
Server files are contained in `server/`.

## Running dev server
!! Probably a better way to handle this but havem't had time to figure it out yet, pull requests welcome.

1. Run `npm frontend-dev-build`, this should copy index.html and other static files to the dist folder where the node server will be looking for static assets.

2. Run `npm frontend-dev-server`

3. Run `npm server` or `npm server-watch` (included nodemon).

## Caveats
Unfortunately any change to non js static files will require an `npm frontend-dev-build`.