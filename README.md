Check.js
=====

Utility for checking if a nested object is valid.

Experimenting with this for now. It is much in its infancy.

While working for a large company with rich data objects I 
found myself constantly writing humungous if statements to ensure
the nested attribute I was accessing was valid. I'm working on this
as a shorthand way to grab a nested object or attribute. Inspired by coffeescript's existential operator. 

So far the functionality allows for 

- Getting an object if valid or a fallback value if not valid

- Finding whether or not an object is valid

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
	var result = Check.use(myObj, 'Building', 'apartment', 'rooms', '1');
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
So far there are three main functions: use, check, and useWithFallback

use
---------
**Check.use**(object, propertiesToUse...) 

Given and *object* and 'n' number of strings representing the properties or index on that object you want to access,
this function will return that attribute/value if it exists and doesn't throw an exception. If that 
attribute or value is undefined or throws and exception ( possibly do to parent property being undefined)
then the function will return the default fallback value (false).

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
from a webservice) a defaultFallback value will be returned. You can change check's default fallback value wich defaults to boolean false.
```javascript
	var result = Check.use(myObj, 'Building', 'apartment', 'rooms', '1');
	//result = 'kitchen'
```

useWithFallback
---------
**Check.useWithFallback**(object, propertiesToUse..., fallback) 

Eccentially the same as use, but the last value will be used as the fallback.

Given and *object* and 'n' number of strings representing the properties or index on that object you want to access, and a fallback value.
this function will return that attribute/value if it exists and doesn't throw an exception. If that propery or value is undefined then the function will return the fallback value provided.

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
from a webservice) a defaultFallback value will be returned. You can change check's default fallback value wich defaults to boolean false.
```javascript
	var result = Check.useWithFallback(myObj, 'Building', 'apartment', 'rooms', '1', 'Object Not found');
	//result = 'kitchen'

	// or
	var result = Check.useWithFallback(myObj, 'Building', 'apartment', 'rooms', '8', 'Object Not Found');
	//result = 'Object Not Found'

```


check
---------
**Check.check**(object, propertiesToUse...)  

Essentially the same as **Use** but this will return a boolean **true** or **false** for whether or not
the attribute or value you are trying to access is valid. The *fallback* value for this will always be
**false**.  
  
###Example:  

```javascript
	var result = Check.check(myObj, 'Building', 'apartment', 'rooms', '2');
	//result = true
```

setDefualtFallback
----
**Check.setDefaultFallback** (object||string||boolean)

set the default fallback value for the Check object

##Example:

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
	Check.setDefaultFallback({});
	var result = Check.use(myObj, 'Building', 'address');
	// result = {}




