const fs = require('fs');

const food = JSON.parse(fs.readFileSync('./data/food.json', 'utf8'));
const nav = JSON.parse(fs.readFileSync('./data/nav.json', 'utf8'));

/* GET meals view */
const meals = (req, res) => {
    res.render('meals', {title: "Travlr Getaways - Meals", nav, food});
};

module.exports = {
    meals
};