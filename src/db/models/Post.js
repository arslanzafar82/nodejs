const Sequelize = require('sequelize');
module.exports = (sequelize,options) => {
    let Post = sequelize.define('posts',{
        id:{
            type:Sequelize.BIGINT,
            primaryKey:true,
            autoIncrement:true
        },
        user_id:Sequelize.BIGINT,
        title:Sequelize.TEXT,
        created_at: Sequelize.DATE,
		updated_at: Sequelize.DATE,
    },{
        ...options,
        hooks:{
            beforeCreate:post=>{
                post.created_at = Date.now();
				post.updated_at = Date.now();
            }
        }
    });
   return Post;
}
