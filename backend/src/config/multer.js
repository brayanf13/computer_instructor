const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

const upFolder = path.resolve(__dirname, '..', '..', 'uploads')

module.exports = {
  directory: upFolder,

  storage: multer.diskStorage({
    destination: upFolder,
    filename(request, file, callback) {
      const hash = crypto.randomBytes(6).toString('hex');

      const fileName = `${hash}-${file.originalname}`;

      callback(null, fileName);
    }
  }),
};