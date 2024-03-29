import express from 'express';
import infoController from '../../controllers/info.controller';


const infoRouter = express.Router();

infoRouter.get('/', infoController.getInfo);


export default infoRouter;