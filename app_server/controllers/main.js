const fs = require('fs');

const blog = JSON.parse(fs.readFileSync('./data/blog.json', 'utf8'));
const sidebar = JSON.parse(fs.readFileSync('./data/sidebar.json', 'utf8'));
const nav = JSON.parse(fs.readFileSync('./data/nav.json', 'utf8'));

/* GET homepage */
const index = (req, res) => {
    res.render('index', {title: "Travlr Getaways - Home", nav, blog, sidebar});
};
module.exports = {
    index
};