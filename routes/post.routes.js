const express = require('express');
const router = express.Router();
const User = require('../models/User.model');
const Post = require('../models/Post.model');

const fileUploader = require('../configs/cloudinary.config');

router.get('/create-post', (req, res) => {
res.render('post/post-form')
});

router.post('/create-post', fileUploader.single('image'), (req, res) => {
  const { title, description } = req.body;
 
  Post.create({ title, description, imageUrl: req.file.path })
    .then(() => res.redirect('/userProfile'))
    .catch(error => console.log(`Error while creating a new movie: ${error}`));
});





module.exports = router;
