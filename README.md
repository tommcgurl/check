check
=====

Utility for checking if a nested object is valid.

Experimenting with this for now. It is much in its infancy.

While working for a large company with rich data objects I 
found myself constantly writing humungous if statements to ensure
the nested attribute I was accessing was valid. I'm working on this
as a shorthand way to grab a nested object or attribute.

So far the functionality allows for 

	* Getting an object if valid or a fallback value if not valid

	* Finding whether or not an object is valid

	* Getting the evaluation on an array of objects

	* Doing all of this without writing long if statements checking
	each value along the way
