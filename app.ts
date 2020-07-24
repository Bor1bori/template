import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import dotenv from 'dotenv';
import path from 'path'

import indexRouter from '@src/routes/index';

let configResult;
switch (process.env.NODE_ENV) {
  case 'prod':
    configResult = dotenv.config({ path: path.join(__dirname, '.env.prod') });
    break;
  case 'develop':
    configResult = dotenv.config({ path: path.join(__dirname, '.env.develop') });
    break
  case 'test':
    configResult = dotenv.config({ path: path.join(__dirname, '.env.test') });
    break
  default:
    throw new Error('process.env.NODE_ENV not set')
    break;    
}
if (configResult.error) {
  throw new Error(`.env.${process.env.NODE_ENV} not exists`)
}


const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);

app.use((err: any, req: any, res: express.Response, next: express.NextFunction) => {
  res.status(500).json({description: err.message, success: false});
});

export default app;
