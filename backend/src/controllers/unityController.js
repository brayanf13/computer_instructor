const connection = require('../database/connection');
const crypto = require('crypto');
const path = require('path');
const uploadConfig = require('../config/multer');
const fs = require('fs');
const { select } = require('../database/connection');

module.exports = {

    async index(request, response) {
        let unity = await connection('unity').select('*');

        if (request.query.search) {

            const search = String(request.query.search);

            let filteredModule = search ? unity.filter(unity => unity.name.includes(search)) : unity;
            // console.log(request.query.search ? 'foi' : 'n達o foi')

            filteredModule = filteredModule.map(m => ({...m, image_url: 'http://192.168.1.10:3333/uploads/' + m.image_name}))

            return response.json(filteredModule);
        } else {
            // console.log(request.query.search ? 'foi' : 'n達o foi')

            unity = unity.map(m => ({...m, image_url: 'http://192.168.1.10:3333/uploads/' + m.image_name}))

            return response.json(unity);
        }
    },

    async indexOneById(request, response) {
        const { id } = request.params;
        let unity = await connection('unity').select('*').where('module_id', id);
        
        unity = unity.map(m => ({...m, image_url: 'http://192.168.1.10:3333/uploads/' + m.image_name}))

        if (request.query.search) {

            const search = String(request.query.search);

            const filteredModule = search ? unity.filter(unity => unity.name.toLowerCase().includes(search.toLowerCase())) : unity;
            // console.log(request.query.search ? 'foi' : 'n達o foi')
            return response.json(filteredModule);
        } else {
            // console.log(request.query.search ? 'foi' : 'n達o foi')
            return response.json(unity);
        }
    },

    async create(request, response) {
        const { name, content, module_id } = request.body;
        const image_url = `http://192.168.1.10:3333/uploads/${request.file.filename}`;
        const image_name = request.file.filename;

        const unity = {
            image_name,
            image_url,
            name,
            content,
            module_id
        }

        await connection('unity').insert(unity);
        return response.json(unity);
    },


    async delete(request, response) {
        const { id } = request.params;
        
        const unity = await connection('unity').select('*').where('id', id).first();
        await connection('unity').where('id', id).delete();
        
        const filePath = path.join(uploadConfig.directory, unity.image_name);
        const fileExists = await fs.promises.stat(filePath);

        if (fileExists) {
            await fs.promises.unlink(filePath);
        }

        return response.status(204).send();
    },

    async update(request, response) {
        const { id } = request.params;
        const { name, content, module_id } = request.body;
        const image_url = `http://192.168.1.10:3333/uploads/${request.file.filename}`;
        const image_name = request.file.filename;

        const unity = await connection('unity').select('*').where('id', id).first();

        const filePath = path.join(uploadConfig.directory, unity.image_name);
        const fileExists = await fs.promises.stat(filePath);

        if (fileExists) {
            await fs.promises.unlink(filePath);
        }

        await connection('unity')
            .where({ id: id })
            .update({ image_name: image_name, image_url: image_url, name: name, content: content, module_id: module_id }, [image_url, name, content, module_id]);

        return response.status(204).send();
    }
}