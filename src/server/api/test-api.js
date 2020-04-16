const os = require('os');

const getTest = (req, res) => {
    console.log('Testing API')
    res.status(200).send("Hosted on: " + os.hostname())
};

module.exports = {
    getTest
}