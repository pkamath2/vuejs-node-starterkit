const bodyParser = require('body-parser')

module.exports = app => {
    app.use(bodyParser.json())

    app.get('/api-test', function(req, res){
        res.send('Testing123');
    });
}