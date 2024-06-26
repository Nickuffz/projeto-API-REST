import { Router } from "express";
import { StatusCodes } from 'http-status-codes';

import { CidadesController } from './../controllers/cities/'

const router = Router();


router.get('/', (req,res) => {

    return res.send('Ola, DEV!');
})

router.get('/cidades', CidadesController.getAllValidation, CidadesController.getAll);
router.post('/cidades', CidadesController.createValidation, CidadesController.create);



export { router };