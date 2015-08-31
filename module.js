var fs = require('fs');
var path = require('path');

module.exports =function (dir, ext, callback){

	var files = [];
	var regex = new RegExp ('\\.' + ext + '$');
	var i = 0;

	fs.readdir(dir, function dirdata (err, data){

		if (err) {
			return callback(err);	
		}

		else { 
			data.forEach(function (file) {
			    if (regex.test(file)) files[i] = file;
			    i += 1;
		    });
		}

		return callback(null, files)
	});

};