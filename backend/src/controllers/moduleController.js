const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const module = await connection('module').select('*');

        if (request.query.search) {
            
            const search = String(request.query.search);
    
            const filteredModule = search ? module.filter(module => module.name.toLowerCase().includes(search.toLowerCase())) : module;
            // console.log(request.query.search ? 'foi' : 'não foi')
            return response.json(filteredModule);
        } else {
            // console.log(request.query.search ? 'foi' : 'não foi')
            return response.json(module);
        }
    },

    async create(request, response) {
        const { name } = request.body;

        await connection('module').insert({
            name
        })

        return response.json({ name });
    },

    async delete(request, response) {
        const { id } = request.params;

        await connection('module').where('id', id).delete();

        return response.status(204).send();
    },

    async update(request, response) {
        const { id } = request.params;
        const { name } = request.body;

        await connection('module')
            .where({ id: id })
            .update({ name }, [name]);

        return response.status(204).send();
    },

    async findOne(request, response) {
        // const module2 = await connection('module').select('*');

        const search = String(request.query.search);
        // const module2 = await connection('module')
        // .whereIn('name', String(search));
        const module2 = await connection('module').select('*');

        const filteredModule = search ? module2.filter(module => module.name.includes(search)) : module2;

        console.log(filteredModule)
        return response.json(filteredModule);

    }
}