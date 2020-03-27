const express = require('express');

const routes = express.Router();

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const validation = require('./validators/Validation');


routes.post('/sessions', validation.IdSessions(), SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', validation.BodyOngs(), OngController.create);

routes.get('/profile', validation.AuthHeaders("auth"), ProfileController.index);

routes.get('/incidents', validation.QueryIncidents(), IncidentController.index);
routes.post('/incidents', validation.AuthHeaders("authorization"),  validation.BodyIncidents(), IncidentController.create);
routes.delete('/incidents/:id', validation.ParamsIncidents(), IncidentController.delete);


module.exports = routes;

