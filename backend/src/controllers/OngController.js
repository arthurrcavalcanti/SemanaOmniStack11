const con = require('../database/conn');
const UniqueId = require('../utils/gererateUniqueId');
module.exports = {
    async index(req, res) {
        const ongs = await con('ongs').select('*');
    
        return res.json(ongs);
    },


    async create(req, res) {
        const { name, email, whatsapp, city, uf } = req.body;

        const id = UniqueId();

        await con('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        });

        return res.json({id});
    }
}