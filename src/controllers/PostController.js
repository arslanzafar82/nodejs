

const Post = require('../db').Post;
module.exports.addPost = async (req, res) => {

  try {
    let post = await Post.create({
      title:req.body.title,
      user_id:req.user.id,
    });
    data = {
        post:post
    }
    return res.send({'data':data,'messag':"Post created successfully",'success':true})
  } catch (error) {
    return res.send({'message':error.errors[0].message,'success':false})
  }
   
}

