import express from "express";
import mongoose from "mongoose";
import * as path from 'path';
import Sample from './model/Sample.js';

var app = express();
var mongourl = "mongodb://localhost:27017/";

// connect to mongodb

async function mongodb_connect(){
    try {
        await mongoose.connect(mongourl);
        console.log("Connected to MongoDB");
    }
    catch (error) {
        console.log(error);
    }
}

// create a sample entry

async function write_something() {
	const sampleEntry = await Sample.create({
	  name: 'sample',
	});

	console.log(sampleEntry);
}

mongodb_connect();
write_something();

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

