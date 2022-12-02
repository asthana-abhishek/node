const reqFilter = (req, resp, next) => {
    console.log('reqFilter');
    if (req.query.age >= 18) {
        resp.send('welcome to project');
    } else if (req.query.age < 18) {
        resp.send('You are under age');
    } else if (!req.query.age) {
        resp.send('Please provide age');

    } else {
        next();
    }

}
module.exports = reqFilter;
