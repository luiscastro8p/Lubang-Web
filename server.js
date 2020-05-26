//Install express server
const express = require('express');
const path = require("path");
const http = require('http');

const app = express();

const port = process.env.PORT || 3001;

// Serve only the static files form the dist directory
// app.use(express.static(__dirname + "/dist"));
app.use(express.static(__dirname + '/dist'));
app.get('/*', (req, res) => res.sendFile(path.join(__dirname)));
const server = http.createServer(app);
server.listen(port, () => console.log(port));

// app.get("/*",  (req, res) => {
//   res.sendFile(path.join(__dirname + "/dist/lubang-web/index.html"));
// });

// Start the app by listening on the default Heroku port
// app.listen(process.env.PORT || 8080);
