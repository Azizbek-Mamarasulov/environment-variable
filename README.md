####This module helps you to control your environment variables in one place.

#####Run `npm install --save environment-variable` to install the package.

####Instructions below show you how to use this module in your project.

1. create a env.json file in your root folder(the folder that includes your package.json file) or create a json file in any directory and pass that file as a first argument for init() method of the module`
2. include the module in your main js file.
3. call the init() method of the module to initialize your variables.
#####and everything is done. Now you can access your variables

####Here is an example of creating an env.json file in your root folder

#####Imaginary **Root folder**

```
	node_modules/
	env.json
	index.js		// main js file
```

#####**env.json** file			// env.json file should be in your root folder then this package can find it automatically.

```
	{
		"PORT": 3000,
		"USER": "simpleUser"
	}
```

#####your main js file [**index.js** file]

```
	const envVar = require('environment-variable');
	envVar.init()
	
	console.log(process.env.PORT);		// or you can use envVar.get(nameOfYourVariableInStringFormat)
	// logs 3000 to your console.
```

####Here is an example of creating optional json file in any directory and use it with `environment-variable` package

#####Imaginary **Root folder**

```
	node_modules/
	config/
		optional.json		//this is an optional json file that you can use in your app insted of env.json file
	index.js				// main js file
```

#####**optional.js** file		// you will use this file insted of env.json file.

```
	{
		"PORT": 5000,
		"USER": "simpleUser"
	}
```	

#####your main js file [**index.js** file]

```
	const envVar = require('environment-variable');
	envVar.init('./config/optional.json')		// you have to pass the path of your optional.json file. If you don't pass an argument, env.json file will be used automatically.
	
	console.log(process.env.PORT);		// or you can use envVar.get(nameOfYourVariableInStringFormat)
	// logs 5000 to your console.
```

####Here is a list of all methods of this module.

Methods | Descriptions
------- | ------------
init() | Initializes your variables. Calling this method is important. Call this method before accessing your variables.
get(nameOfYourVariableInStringFormat) | You can use both **require('environment-variable').get(nameOfYourVariableInStringFormat)** or **process.env[nameOfYourVariableInStringFormat]**.
set(nameOfYourVariableInStringFormat, valueOfYourVariable) | If you want to set a property for **process.env** object. You can use both **envVar.set(key, value)** or **process.env[key] = value**.