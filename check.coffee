# Check.js 0.2.0 (Beta)
# CommonJS module 
# @author tommcgurl ( Tom McGurl ) 
check = 
	# Return an object 
	# @param {Object} The object to attempt accessing properties on
	# @param {Splat: String} n number of strings, each once representing 
	# 		a property to access on the parent
	# @param a fallback value to be returned if the object isn't valid
	# @return Object or fallback or defaultFallback
	useWithFallback: (obj , suspects..., fallback)->
		# return if the first argument isn't an object
		return fallback if typeof obj != 'object'
		for suspect in suspects
			console.log 'suspect: ' + suspect;
			return fallback unless obj[suspect]?
			obj = obj[suspect]
		return obj

	# Return an object 
	# @param {Object} The object to attempt accessing properties on
	# @param {Splat: String} n number of strings, each once representing 
	# 		a property to access on the parent
	# @return Object or defaultFallback
	use: (obj, suspects...)->
		# Call the function with '...' so it passes the splat rather
		# than the an array

		return @useWithFallback(obj,suspects..., @defaultFallback)

	# Return an object 
	# @param {Object} The object to attempt accessing properties on
	# @param {Splat: String} n number of strings, each once representing 
	# 		a property to access on the parent
	# @return {Boolean} true if object exists false if not
	check: (obj, suspects...)->
		return !!@useWithFallback(obj, suspects..., @defaultFallback)

	# Sets the default fallback for the check object
	# @param Fallback value to be set
	setDefaultFallback: (fallback)->
		@defaultFallback = fallback

	defaultFallback: false


module.exports = check;

