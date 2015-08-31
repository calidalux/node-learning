var fs = require('fs');
var path = require('path');
var myModule = require('./module.js');

myModule(process.argv[2], process.argv[3], function (err, list){
	if (err) {
		throw err;
	}
	else list.forEach(function (file){
		console.log(file);
	})
	
});