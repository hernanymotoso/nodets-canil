import { Request, Response } from 'express';

const search = (req: Request, res: Response) => {
  res.send('search page');
  console.log('page/paged');
};

export { search };
