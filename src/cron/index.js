var cron = require('node-cron');
const Post = require('../db').Post;

cron.schedule('* * * * *', () => {
  console.log('running every minute to 1 from 5');
  let post =  Post.create({
    title:"Hello From CRON",
    user_id:1,
  });

  console.log(post);
});