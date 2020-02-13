var inputfile="";
	yaml = require('js-yaml'),
    fs = require('fs'),
	yamlCounter = 0
fs.readdir(".", (err, files) => {
	files.forEach((file,key,arr) => {
		if(file.includes("yaml")){
			yamlCounter = yamlCounter + 1;
			if(yamlCounter > 1){
				throw new Error('Multiple YAMLs found');
			}
			inputfile = "./" + file.toString();
			var	obj = yaml.load(fs.readFileSync(inputfile, {encoding: 'utf-8'}));
			oJSON= JSON.stringify(obj, null, 2);
			data = "var swaggerJSON = " + oJSON;
			fs.writeFile("../apiproxy/resources/jsc/JS-SwaggerJSON.js", data, (err) => {
			  if (err) console.log(err);
			  console.log("Successfully Written to File.");
			});
		}
		if (Object.is(arr.length - 1, key)) {
			if (yamlCounter ==0){
				if (!file.includes("yaml")){
					throw new Error('No YAML found in the OAS folder');
				}
			}
		}
	});
});
