var bl = require('bl');
var fs = require('fs');
var http = require('http');
var i = 0;

http.get(process.argv[2], function callback(response){

	response.pipe(bl(function (err, data){
		data = data.toString();
		console.log (data);
		http.get(process.argv[3], function callback(response){

			response.pipe(bl(function (err, data){
				data = data.toString();
				console.log (data);
				http.get(process.argv[4], function callback(response){

					response.pipe(bl(function (err, data){
						data = data.toString();
						console.log (data);
					}));
				});
			}));
		});
	}));
});



