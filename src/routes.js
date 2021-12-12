const express = require( "express" );
const SectionControler = require ('./controles/SectionControler')
const routes = express.Router();

routes.get('/users', (req, res) => {
    return res.json({idade: req.query.idade});
});

routes.post('/section', SectionControler.Storage);

routes.put('/users/:id', (req, res) => {
    return res.json({id: req.params.id});
});

routes.delete('/', (req, res) => {
    return res.json({message: "Ola"});
});

module.exports = routes;