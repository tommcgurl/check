Check.js
=====

Utility for checking if a nested object is valid.

Experimenting with this for now. It is much in its infancy.

While working for a large company with rich data objects I 
found myself constantly writing humungous if statements to ensure
the nested attribute I was accessing was valid. I'm working on this
as a shorthand way to grab a nested object or attribute.

So far the functionality allows for 

- Getting an object if valid or a fallback value if not valid

- Finding whether or not an object is valid

- Getting the evaluation on an array of objects

- Doing all of this without writing long if statements checking 
each value along the way

Usage
----
*Given an object...*

```javascript
	var myObj = {
		Building: {
			apartment: {
				rooms: [
					'living',
					'kitchen',
					'bedroom'
				]
			}
		}
	};
```	
*Checkjs allows you to safely use this object like this...*

```javascript
	var result = Check.use(myObj, '.Building.apartment.rooms[1]' false);
	//result = 'kitchen'
```
*This is equivalent to*

```javascript
	var result;
	if(myObj && myObj.Building && myObj.Building.apartment && myObj.Building.apartment.rooms && myObj.Building.apartment.rooms[1]){
		result = myObj.Building.apartment.rooms[1]
	} else {
		result = false;
	}
```

Docs
====
So far there are three main functions: Use, Check, and checkList

Use
---------
**check.use**(object, attributeToUse, fallback)  
	Given and *object* and a *String* representing the attribute or value on that object you want to access,
this function will return that attribute/value if it exists and doesn't throw an exception. If that 
attribute or value is undefined or throws and exception ( possibly do to parent attribute being undefined)
then the function will return the **optional** *fallback* value provided. If no fallback value is passed then
Check will default to it's *default fallback* value.

###Example:

Let's say we have an object like the one above in the usage section...

```javascript
var myObj = {
	Building: {
		apartment: {
			rooms: [
				'living',
				'kitchen',
				'bedroom'
			]
		}
	}
};
```
and we want to safely access the 'bedroom' String (myObj.Building.apartments.rooms[2]). If this string 
or anypart of this object is at some point undefined or invalide (for example if you have an object coming 
from a webservice) we can provide a *fallback* value that Use will return instead. 
```javascript
	var result = Check.use(myObj, '.Building.apartment.rooms[2]', 'Room Unknown');
	//result = 'kitchen'
```

