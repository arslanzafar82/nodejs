module.exports.middleware = async (req, res, next) => {
    console.log("middleware");
	if (req.user) {
		return next();
	} else {
		req.user = {};
		//console.log("skip middleware");
		next();
	}
};