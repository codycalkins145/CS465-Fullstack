const fs = require('fs');

const stays = JSON.parse(fs.readFileSync('./data/stays.json', 'utf8'))

/* GET rooms view */
const rooms = (req, res) => {
    res.render('rooms', {title: "Travlr Getaways - Rooms", stays});
};

module.exports = {
    rooms
};