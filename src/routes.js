const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer');

const PDFDocument = require('pdfkit');
const fs = require('fs');

/** Model */
const Upload = require('./models/Upload');

/** Controllers */

/** GET - método por gerar um arquivo PDF */
/*routes.get('/pdf', (request, response) => {
    // Create a document
    const document = new PDFDocument();

    const filename = 'PDF_Node';

    const lorem = 'Criando aplicações com Node, React e MongoDB.';

    document.fontSize(16);
    document.text(`This text is left aligned. ${lorem}`);

    document.image('temp/uploads/1faa9e2e700d06f17f0f63b4096efd84-mousepad_one_piece.jpg', 10, 135, {fit: [680, 230]})

    response.setHeader('Content-type', 'application/pdf');
    response.setHeader('Content-disposition', `inline; filename=${filename}.pdf`);

    document.pipe(response);
    document.end();

    //return response.json({ success: 'Arquivo gerado com sucesso!' });
});*/


/** GET - método responsável por listar todos arquivos */
routes.get('/upload', async (request, response) => {
    const uploads = await Upload.find();

    return response.json(uploads);
});


/** POST - método responsável por fazer um upload de arquivo */
routes.post('/upload', multer(multerConfig).single('file'), async (request, response) => {
    const { originalname: name, size, key, location: url = '' } = request.file;

    const upload = await Upload.create({name, size, key, url});

    return response.json(upload);
});

/** DELETE - método responsável por deletar um arquivo passando o id como argumento */
routes.delete('/upload/:id', async (request, response) => {
    const upload = await Upload.findById(request.params.id);

    await upload.remove();

    return response.send();
});

module.exports = routes;