//Redirect all traffic from http to https.
// function requireHTTPS(req, res, next) {
//   // The 'x-forwarded-proto' check is for Heroku
//   if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
//       return res.redirect('https://' + req.get('host') + req.url);
//   }
//   next();
// }

//Install express server
const express = require('express');
// const app = express();
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/min-pro2'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/min-pro2/'}),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
