const path = require('path');

exports.init = (cfg) => {
	let env;
	if(cfg){
		env = cfg;
	} else {
		env = require(path.join(process.cwd(), 'env.json'));
	}
	for(let x in env){
		process.env[x] = JSON.stringify(env[x]);
	}
}

exports.get = (name) => {
	return JSON.parse(process.env[name]);
}

exports.set = (key, value) => {
	process.env[key] = JSON.stringify(value);
}