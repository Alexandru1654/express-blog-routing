const express = require('express');
const router = express.Router();
const posts = require('../__MACOSX/db');

router.get('/', (req, res) => {
    res.send('<ul>' + posts.map(post => `<li>${post.title}</li>`).join('') + '</ul>');
});

