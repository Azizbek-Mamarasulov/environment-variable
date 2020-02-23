This module helps you to control your environment variables in one place.

Advantages of using this module is that You can use nested values in your variables.

Run `npm install --save environment-variable` to install the package.

Instructions below show you how to use this module in your project.

1. create an env.json file in your root folder(the folder that includes your package.json file) or you can pass an **object** as a first argument to the .init() method of the module
2. include the module in your main js file.
3. call the .init() method of the module to initialize your variables.
and everything is done. Now you can access your variables

Here is an example of creating an env.json file in your root folder

Imaginary `Root` folder

```
	node_modules/
	env.json
	index.js		// main js file
```

`env.json` file			[ env.json file should be in your root folder then this package can find it automatically. ]

```
	{
		"PORT": 3000,
		"USER": "simpleUser",
		"DB": {
			"DB_USER": "SYSDBA",
			"DB_PASSWORD": "masterkey"
		}
	}
```

`main js` file [ index.js file ]

```
	const env = require('environment-variable');
	env.init();
	
	console.log(env.get('PORT'));
	// logs 3000 to your console.

	console.log(env.get("DB").DB_USER);
	// logs SYSDBA to your console.
```

Here is an example of passing an `object` as a first argument to the .init() method.

`main js` file		[here, it is an index.js file]

```
	const env = require('environment-variable');
	env.init({
		PORT: 3000,
		USER: "simpleUser",
		DB: {
			DB_USER: "SYSDBA",
			DB_PASSWORD: "masterkey"
		},
		arr: [1, 2, 'a', 'b', {name: "simpleName", newArr: [1, 2, 3, {nested: ["first", "second"]}]}]
	});
	
	console.log(env.get('PORT'));
	// logs 3000 to your console.

	console.log(env.get("DB").DB_USER);
	// logs SYSDBA to your console.
	
	console.log(env.get("arr")[4].name);
	// logs simpleName to your console.
```

Here is an example of using an optional json file.		[creating a json file that's name is different than env.json. e.g. var.json]

Imaginary `Root folder`

```
	node_modules/
	config/
		optional.json		//this is an optional json file that you can use in your app insted of env.json file
	index.js			// main js file
```
`optional.js` file		[you will use this file insted of env.json file.]

```
	{
		"PORT": 5000,
		"USER": "simpleUser",
		"DB": {
			"DB_USER": "SYSDBA",
			"DB_PASSWORD": "masterkey"
		}
	}
```	

`main js` file		[index.js file.]

```
	const env = require('environment-variable');
	const optionalFile = require('./config/optional.json');
	env.init(optionalFile);		// you have to pass the your optional.json file. If you don't pass an argument, env.json file will be used automatically.
	
	console.log(env.get('PORT'));
	// logs 5000 to your console.

	console.log(env.get("DB").DB_USER);
	// logs SYSDBA to your console.
```

Here is a list of all methods of this module.

Methods | Descriptions
------- | ------------
init() | Initializes your variables. Calling this method is important. Call this method before accessing your variables.
get(nameOfYourVariableInStringFormat) | Helps you to access your variable
set(nameOfYourVariableInStringFormat, valueOfYourVariable) | If you want to set a property for **process.env** object You can use **.set(key, value)**

Information about methods

`.init(optional argument)`		[accepts an argument]

`.init()` method should be called before accessing any of your variables. Calling this method initializes your variables.

example of usage

```
	const env = require('environment-variable');
	env.init();
```


`.get(nameOfYourVariable)`		[accepts an argument]

`.get("variableName")` method helps you to access your variables.
`.get()` returns the original data type.

example of usage

```
	const env = require('environment-variable');
	env.init({
		PORT: 3000,
		DB: {
			DB_USER: "SYSDBA",
			DB_PASSWORD: "masterkey"
		}
	});
	
	const PORT = env.get("PORT");
	const DB = env.get("DB");
```

`.set(key, value)`					[acceps two arguments]

`.set(key, value)` method helps you to initialize your arbitrary variables.

Here is an example

```
	const env = require('environment-variable');
	env.init();
	
	env.set("PORT", 3000);
	env.set("DB", {
		DB_USER: "SYSDBA",
		DB_PASSWORD: "masterkey"
	});
```
