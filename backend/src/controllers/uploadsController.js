const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    let unity = await connection('unity').select('*');

    // uploads = unity.map(m => ({...m, image_url: 'http://mba-prt-a.fibralink.net.br:31300/uploads/' + m.image_name}))
    uploads = unity.map((m) => ({
      link: '192.168.3.7:3333/uploads/' + m.image_name,
    }));

    return response.json(uploads);
  },
};
