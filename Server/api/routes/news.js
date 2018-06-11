const exprss = require('express');
const router = exprss.Router();
const request = require('request');


//giving all the news post to the react app
router.get('/',(req, res, next) =>{
    request('https://newsapi.org/v2/top-headlines?country=us&apiKey=bf92a4f45a1e4e13b3bdf41f3cdb266a',
    function (error, response, body) {
    return res.json(JSON.parse(body));
    });
});

module.exports = router;