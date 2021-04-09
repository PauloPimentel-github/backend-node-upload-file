const mongoose = require('mongoose');
const aws = require('aws-sdk');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const s3 = new aws.S3();

const UploadSchema = new mongoose.Schema({
    name: String,
    size: Number,
    key: String,
    url: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

//antes de salvar um novo arquivo
UploadSchema.pre('save', function() {
    if (!this.url) {
        this.url = `${process.env.APP_URL}/files/${this.key}`;
    }
});

//antes de remover o registro no banco de dados deleta o arquivo no diretório que está salvo
UploadSchema.pre('remove', function() {
    if (process.env.STORAGE_TYPE === 's3') {
        return s3.deleteObject({ 
            Bucket: 'uploadreact',
            Key: this.key,
        }).promise()
    } else {
        return promisify(fs.unlink)(
            path.resolve(__dirname, '..', '..', 'temp', 'uploads', this.key)
        );
    }
});


module.exports = mongoose.model('Upload', UploadSchema);