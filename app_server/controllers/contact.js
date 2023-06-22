const fs = require('fs');

const nav = JSON.parse(fs.readFileSync('./data/nav.json', 'utf8'));
const info = JSON.parse(fs.readFileSync('./data/info.json', 'utf8'));
const message = JSON.parse(fs.readFileSync('./data/message.json', 'utf8'));

/* GET contact view */
const contact = (req, res) => {
    res.render('contact', {title: "Travlr Getaways - Contact", nav, message, info});
};

module.exports = {
    contact
};