import { Router } from "express";
import { StatusCodes } from 'http-status-codes';

import { CidadesController } from './../controllers/cities/'

const router = Router();


router.get('/', (req,res) => {

    return res.send('Ola, DEV!');
})

router.post(
'/cidades', 
CidadesController.createBodyValidator, 
CidadesController.createQueryValidator, 
CidadesController.create
);



export { router };