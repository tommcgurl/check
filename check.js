/**
 *  Check.js 1.0.0
 *  @author TheProfessor117 ( Tom McGurl ) 
 */
(function() {
	check = {};

	var
	self = this,
	defFallback = false;

	var _suspectValid = function _suspectValid(suspect) {
		if(!(typeof suspect === 'string')) {
			return false;
		} else if(suspect.charAt(0) !== '.' && suspect.charAt(0) !== '[') {
			return false;
		} else { 
			return true;
		}
	};
	
	/*
	 *  Check to see if an nested object is defined or not.
	 *  First argument is an object
	 *  Second argumnt is a String
	 *  Third argument is optional
	 *  Returns the object if valid and either fallback or defFallback
	 *  if fallback is not passed
	 */
	check.use = function(obj, suspect, fallback) {
		var res = fallback || defFallback;
		if(!_suspectValid(suspect)){
			return undefined
		}
		try {
			return eval('obj' + suspect) || res;
		} catch(e) {
			return res;
		}
	};
	/*
	 *  First argument is an object
	 *  Second argumnt is a String
	 *  Third argument is optional
	 *  Returns true if object is valid and fallback if not or false
	 *  if fallback is not passed
	 */
	check.check = function check(obj, suspect) {
		return !!self.check.use(obj,suspect,false);
	};
	/*
	 *  First argument is an array of objects
	 *  Second argumnt is an array of strings
	 *  Third argument is optional
	 *  Returns an array of results from check.check for each
	 *  pair in the provided arrays.
	 */
	check.checkList = function check(objArray, suspectArray, fallback) {
		var resultArray = [];
		if (!Array.isArray(objArray) || !Array.isArray(objArray)) {
			return false;
		}
		for (var i = objArray.length - 1; i >= 0; i--) {
			resultArray.push(self.check.use(objArray[i], suspectArray[i], fallback));
		};
		return resultArray;
	}

	/*
	 * Set the default Fallback
	 */
	check.setDefaultFallback = function setDefaultFallback(fallback) {
		self.defFallback = fallback;
	}

})();
