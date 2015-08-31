var fs = require('fs')


fs.readFile(process.argv[2], 'utf8', function count (err, data){
	if (err) throw err;
	var inFile = data.split('\n');
	console.log(inFile.length - 1);
});