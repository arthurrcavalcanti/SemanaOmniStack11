
const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
    BodyOngs() {
        return celebrate({
            [Segments.BODY]: Joi.object().keys({
                name: Joi.string().required(),
                email: Joi.string().required().email(),
                whatsapp: Joi.string().min(10).max(11).required(), //.integer().min(10).max(12) not working if joi.number
                city: Joi.string().required(),
                uf: Joi.string().required().length(2),
            })
        });
    },
    
    AuthHeaders(authorization) {
        return celebrate({
            [Segments.HEADERS]: Joi.object({
                [authorization]: Joi.string().required(),
            }).unknown(),
        });
    },

    BodyIncidents() {
        return celebrate({
            [Segments.BODY]: Joi.object().keys({
                title: Joi.string().required().max(100),
                description: Joi.string().required(),
                value: Joi.number().required().min(0)
            })
        });
    },

    QueryIncidents() {
        return celebrate({
            [Segments.QUERY]: Joi.object().keys({
                page: Joi.number(),
            })
        });
    },
    
    ParamsIncidents() {
        return celebrate({
            [Segments.PARAMS]: Joi.object().keys({
                id: Joi.number().required(),
            })
        });
    },
    
    IdSessions() {
        return celebrate({
            [Segments.BODY]: Joi.object().keys({
                id: Joi.string().required(),
            })
        });
    },
}