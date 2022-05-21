const sequelize = require('../config/config');
const { Comment } = require('../models');
const { Post } = require('../models');
const { seedUsers, userData } = require('./userData');
const postData = require('./postData');
const commentData = require('./commentData');


const randomUser = () => Math.floor((Math.random() * userData.length)+1);
const randomPost = () => Math.floor((Math.random() * postData.length)+1);

const addUserToPost = () => {
    return postData.map(post => {
        post.user_id = randomUser()
        return post;
    });
}

const addUserAndPostToComment = () => {
    return commentData.map(comment => {
        comment.user_id = randomUser();
        comment.post_id = randomPost();
        return comment;
    })
}

const seedAll = async () => {
    const newPostData = addUserToPost();
    const newCommentData = addUserAndPostToComment();

    console.log(newPostData);
    console.log(newCommentData);

    await sequelize.sync({ force: true });
    await seedUsers();
    await Post.bulkCreate(newPostData);
    await Comment.bulkCreate(newCommentData);
    process.exit(0);
}

seedAll();