/* GET travel view */
const travel = (req, res) => {
    res.render('travel', {title: "Travlr Getaways - Travel"});
};

module.exports = {
    travel
};