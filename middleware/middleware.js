var middleware = {
	requireAuthentication:function(req,res,next){
		console.log("Hitting any applications")
		
		next();
		},
	requestTime:function(req,res,next){
		console.log("Hitting private on " + new Date().toString() + " :) ")
		next()
	}

}
module.exports = middleware