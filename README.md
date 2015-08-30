# Node(express) React/Babel Boilerplate

## Setup
`cd ./node-react-babel-stack`,
`npm install`

`cd ./server`
`npm install`

`cd ./frontend`
`npm install`

Frontend files are contained in the `frontend/src` directory.
Server files are contained in `server/`.

## Running dev server
!! Probably a better way to handle this but havem't had time to figure it out yet, pull requests welcome.

1. Run `npm run frontend-dev-build`, this will copy index.html to the dist folder for express to mount.

2. Run `npm run frontend-dev-server`

3. Run `npm run server` or `npm server-watch` (included nodemon).

## Running production build
`npm run frontend-prod-build`

After doing this you are free to run your node server without the separate dev server, it will just grab the bundle from the dist folder.

## Caveats

### Static files
- Paths to static files should be prefixed with `{%=o.htmlWebpackPlugin.options.assetPath%}`
- Changes to index.html will require an `npm-frontend-dev-build` to be reflected.

### Ports
The frontend server and the node server have to run on different ports in development.

To change the ports for the frontend server please go to:
`/frontend/webpack.config.dev.js` and replace any instance of http://localhost:8080 with the path to your preferred url (must be full url).

You will also need to change the path specified in the index.html file for bundle.js to match it.

To change port for the express server run with PORT=YOUR-PORT-HERE npm run server




