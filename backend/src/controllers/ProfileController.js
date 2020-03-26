const con = require('../database/conn');

module.exports = {
    async index(req, res) {
        const ong_id = req.headers.auth;

        const incidents = await con('incidents').where('ong_id', ong_id).select('*');

        return res.json(incidents);
    }
}