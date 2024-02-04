var express = require('express');
var app = express();
const path = require('path');

// code to serve any static pages in /pages/
// redirect from non-existing "page" to index
app.get('/pages/:name', function(req, res) {
	res.sendFile(req.params.name, {root: path.join(__dirname, 'pages') }, function(err) {
		if (err) {
			res.redirect('/pages/index.html');
		} else {
			console.log('Sent:', req.params.name)
		}
	});
});

// display a user-friendly 404 error for anything else
app.get('*', (req, res) => {
	res.status(404).sendFile('error.html', {root: path.join(__dirname, 'pages') });
});

// let app listen on port 3000
app.listen(3000, function() {
	console.log('App is listening on port 3000');	
});