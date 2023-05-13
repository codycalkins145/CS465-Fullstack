const fs = require('fs');

const latest = JSON.parse(fs.readFileSync('./data/latest.json', 'utf8'));
const tips = JSON.parse(fs.readFileSync('./data/tips.json', 'utf8'));
const nav = JSON.parse(fs.readFileSync('./data/nav.json', 'utf8'));

/* GET news view */
const news = (req, res) => {
    res.render('news', {title: "Travlr Getaways - News", nav, latest, tips});
};

module.exports = {
    news
};