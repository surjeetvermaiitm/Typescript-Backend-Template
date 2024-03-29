import express from 'express';
import infoRouter from './info.route';

const v1Router = express.Router();

v1Router.use('/info', infoRouter);

export default v1Router;