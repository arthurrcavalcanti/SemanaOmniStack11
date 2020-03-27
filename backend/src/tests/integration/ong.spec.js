const request = require('supertest');
const app = require('../../app');
const con = require('../../database/conn');
describe('ONG', () => {
    beforeEach(async () => {
        await con.migrate.rollback();
        await con.migrate.latest();
    })

    afterAll(async () => {
        await con.destroy();
    })

    it('should be able to create a new ong', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "Ong Teste 55!",
                email: "email@tes31231te.com.br",
                whatsapp: "12345678901",
                city: "Recife sdasdasda",
                uf: "PE"
            });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    })
})