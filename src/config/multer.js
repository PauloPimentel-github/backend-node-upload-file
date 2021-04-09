const multer = require('multer');
const path = require('path');
const crypto = require('crypto');
const aws = require('aws-sdk');
const multerS3 = require('multer-s3');

const storageTypes = {
    local: multer.diskStorage({
        destination: (request, file, callback) => {
            callback(null, path.resolve(__dirname, '..', '..', 'temp', 'uploads'));
        },

        filename: (request, file, callback) => {
            crypto.randomBytes(16, (error, hash) => {
                if (error) callback(error);

                file.key = `${hash.toString('hex')}-${file.originalname}`;

                callback(null, file.key);
            });
        }
    }),

    s3: multerS3({
        s3: new aws.S3(),
        bucket: 'uploadreact',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: 'public-read',
        key: (request, file, callback) => {
            crypto.randomBytes(16, (error, hash) => {
                if (error) callback(error);

                const filename = `${hash.toString('hex')}-${file.originalname}`;

                callback(null, filename);
            });
        }
    })
}


module.exports = {
    path: path.resolve(__dirname, '..', '..', 'temp', 'uploads'),
    storage: storageTypes[process.env.STORAGE_TYPE],

    limits: {
        fileSize: 2 * 1024 * 1024
    },

    fileFilter: (request, file, callback) => {
        const allowedMimeTypes = ['image/jpeg', 'image/pjpeg', 'image/png', 'image/gif'];

        if (allowedMimeTypes.includes(file.mimetype)) {
            callback(null, true);
        } else {
            callback(new Error('Invalid file type.'));
        }
    }
};