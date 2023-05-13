const fs = require('fs');

const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));
const nav = JSON.parse(fs.readFileSync('./data/nav.json', 'utf8'));

/* GET travel view */
const travel = (req, res) => {
    res.render('travel', {title: "Travlr Getaways - Travel", nav, trips});
};

module.exports = {
    travel
};