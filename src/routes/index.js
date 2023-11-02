
// const router = require('express').Router();
const router = require('express').Router();
const UserController = require('../controllers/UserController')
const PostController = require('../controllers/PostController')
const MiddlewareController = require('../controllers/MiddlewareController')
const jwt = require("jsonwebtoken");
router.use(MiddlewareController.middleware)

let auth = (req, res, next) => {
    console.log("auth");
	if(!req.header('authorization')){
        return res.send({'success':false,'message':'User Token is missing'});
	}
    let token = req.header('authorization').split(" ")[1];
    var user = jwt.verify(token, 'shhhhh');
    if(req.user && req.user.id != user.id)
    {
        return res.send({'success':false,'message':'User Token is mismatched'});
    }
    req.user = user.user;
    next();
};
router.post('/login', UserController.login);
router.post('/signup', UserController.signup);
router.get('/home',auth, UserController.home);
router.post('/addPost',auth, PostController.addPost);



module.exports = router;
