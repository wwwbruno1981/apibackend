const express = require( "express" );
const routes = express.Router();

routes.get('/users', (req, res) => {
    return res.json({Metodo: 'get tudo ok...'});
});

routes.post('/section', (req, res) => {
    return res.json({Metodo: 'post tudo ok...'});

});

module.exports = routes;