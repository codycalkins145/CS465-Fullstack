const fs = require('fs');

const nav = JSON.parse(fs.readFileSync('./data/nav.json', 'utf8'));

/* GET contact view */
const contact = (req, res) => {
    res.render('contact', {title: "Travlr Getaways - Contact", nav});
};

module.exports = {
    contact
};