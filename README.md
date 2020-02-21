This module helps you to control your environment variables in one place.

Run `npm install --save environment-variable` to install the package.

!!! Warning
If you are using objects or arrays as a value to your variable then use `.get('NAME_OF_YOUR_OBJECT_VARIABLE')` method to access your objects and arrays or use `JSON.parse(process.env['NAME_OF_YOUR_OBJECT_VARIABLE'])`.
IF the type of your variable is primitive [string, number] then you can just use `process.env['NAME_OF_YOUR_VARIABLE']` or `.get('NAME_OF_YOUR_VARIABLE')`

Instructions below show you how to use this module in your project.

1. create a env.json file in your root folder(the folder that includes your package.json file) or you can pass an **object** as a first argument to init() method of the module
2. include the module in your main js file.
3. call the init() method of the module to initialize your variables.
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
	
	console.log(process.env.PORT);		// or you can use env.get(nameOfYourVariableInStringFormat)
	// logs 3000 to your console.

	console.log(app.get("DB").DB_USER); 	// or you can use JSON.parse(process.env.DB).DB_USER
	// logs SYSDBA to your console.
```

Here is an example of passing an `object` as a first argument to .init() method.

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
	
	console.log(process.env.PORT);		// or you can use env.get(nameOfYourVariableInStringFormat)
	// logs 3000 to your console.

	console.log(app.get("DB").DB_USER); 	// or you can use JSON.parse(process.env.DB).DB_USER
	// logs SYSDBA to your console.
```

Here is an example of using an optional json file.		[creating a json file that's name is different than env.json. e.g. var.json]

Imaginary `Root folder`

```
	node_modules/
	config/
		optional.json		//this is an optional json file that you can use in your app insted of env.json file
	index.js				// main js file
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

`main js` file [index.js file.]

```
	const env = require('environment-variable');
	const optionalFile = require('./config/optional.json');
	env.init(optionalFile);		// you have to pass the your optional.json file. If you don't pass an argument, env.json file will be used automatically.
	
	console.log(process.env.PORT);		// or you can use env.get(nameOfYourVariableInStringFormat)
	// logs 5000 to your console.

	console.log(app.get("DB").DB_USER); 	// or you can use JSON.parse(process.env.DB).DB_USER
	// logs SYSDBA to your console.
```

Here is a list of all methods of this module.

Methods | Descriptions
------- | ------------
init() | Initializes your variables. Calling this method is important. Call this method before accessing your variables.
get(nameOfYourVariableInStringFormat) | You can use both **.get(nameOfYourVariableInStringFormat)** or **process.env[nameOfYourVariableInStringFormat]**.
set(nameOfYourVariableInStringFormat, valueOfYourVariable) | If you want to set a property for **process.env** object. You can use both **.set(key, value)** or **process.env[key] = value**.

Information about methods

`init([optional argument])`		[accepts an argument]

`.init()` method should be called before accessing any of your variables. Calling this method initializes your variables.

example of usage

```
	const env = require('environment-variable');
	env.init();
```


`get([nameOfYourVariable])`		[accepts an argument]

`.get("variableName")` method helps you to access your variables. Type of the variable doesn't matter.
If type of the variable that you are accessing is an Object or an Array. then `.get("NAME_OF_YOUR_OBJECT_VARIABLE")   ===   JSON.parse(process.env["NAME_OF_YOUR_OBJECT_VARIABLE"])`
It means. If you want to access a variable that's type is not a primitive then you should use `.get()` method to do less and achieve more.

But you can still use `process.env['variableName']`. If type of the variable is an object or an array, you have to call `JSON.parse(process.env['variableName'])`.
Using `.get()` is recommended.

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
	
	const PORT = env.get("PORT");			// env.get("PORT") is an equivalent to process.env.PORT
	const DB = env.get("DB")				// env.get("DB") is an equivalent to JSON.parse(process.env.DB)
```

`set(key, value)`					[acceps two arguments]

`.set(key, value)` method helps you to initialize your arbitrary variables. If value of your variable is an object or an array use this method. And this method adds your variables to `process.env`.
You can also use `process.env['variableName'] = "value"`. If type of the variable is an object or an array, you have to use `process.env['variableName'] = JSON.stringify({PORT: 3000, NESTED_DATA: {age: 5}})`.

Here is an example

```
	const env = require('environment-variable');
	env.init();
	
	env.set("PORT", 3000);					// env.set("PORT", 3000) is an equivalent to process.env.PORT = 3000
	env.set("DB", {
		DB_USER: "SYSDBA",
		DB_PASSWORD: "masterkey"
	})						//env.set("DB", { DB_USER: "SYSDBA", DB_PASSWORD: "masterkey"})	is an equivalent to process.env.DB = JSON.stringify({ DB_USER: "SYSDBA", DB_PASSWORD: "masterkey"})
```