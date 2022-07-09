const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const login = await connection('login').select('*');
        
        if (request.query.search) {

            const user = String(request.query.user);

            const filteredModule = user ? login.filter(login => login.user.includes(user)) : login;
            return response.json(filteredModule);
        } else {
            return response.status(404).send();
        }
    },

    async create(request, response) {
        const { user, password } = request.body;

        await connection('login').insert({
            user,
            password
        })

        return response.status(204).send();

    },

    async delete(request, response) {
        const { id } = request.params;

        await connection('login').where('id', id).delete();

        return response.status(204).send();
    },
}