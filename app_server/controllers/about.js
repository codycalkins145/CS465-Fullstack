const fs = require('fs');

const nav = JSON.parse(fs.readFileSync('./data/nav.json', 'utf8'));

/* GET about view */
const about = (req, res) => {
    res.render('about', {title: "Travlr Getaways - About", nav});
};

module.exports = {
    about
};