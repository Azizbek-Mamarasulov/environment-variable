const path = require('path');

exports.init = (cfgPath) => {
	let env;
	if(cfgPath){
		env = require(path.join(process.cwd(), cfgPath));
	} else {
		env = require(path.join(process.cwd(), 'env.json'));
	}
	if(Object.assign){
		Object.assign(process.env, process.env, env);
	} else {
		for(let x in env){
			process.env[x] = env[x];
		}
	}
}

exports.get = (name) => {
	return process.env[name];
}

exports.set = (key, value) => {
	process.env[key] = value;
}