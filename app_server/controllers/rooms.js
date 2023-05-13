const fs = require('fs');

const stays = JSON.parse(fs.readFileSync('./data/stays.json', 'utf8'));
const nav = JSON.parse(fs.readFileSync('./data/nav.json', 'utf8'));

/* GET rooms view */
const rooms = (req, res) => {
    res.render('rooms', {title: "Travlr Getaways - Rooms", nav, stays});
};

module.exports = {
    rooms
};