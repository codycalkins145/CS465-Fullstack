/* GET rooms view */
const rooms = (req, res) => {
    res.render('rooms', {title: "Travlr Getaways - Rooms"});
};

module.exports = {
    rooms
};