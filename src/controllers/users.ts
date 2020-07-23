import express from 'express';

/* GET users listing. */
export const getUsers = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.send('respond with a resource');
};

