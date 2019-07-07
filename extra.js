// Local build for package.json
"start": "webpack-dev-server --port 3000 --progress --inline --hot --history-api-fallback"

// Production build for package.json
"dev": "webpack-dev-server --port 3000 --progress --inline --hot --history-api-fallback",
"postinstall": "webpack -p --define process.env.NODE_ENV='\"production\"' --progress --colors",
"start": "node server.js"
