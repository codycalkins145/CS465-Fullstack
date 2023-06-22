const fs = require('fs');

const nav = JSON.parse(fs.readFileSync('./data/nav.json', 'utf8'));
const details = JSON.parse(fs.readFileSync('./data/details.json', 'utf8'));

/* GET about view */
const about = (req, res) => {
    res.render('about', {title: "Travlr Getaways - About", nav, details});
};

module.exports = {
    about
};