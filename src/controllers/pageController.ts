/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const home = (req: Request, res: Response) => {
  res.send('home page');
  console.log('page/paged');
};
const dogs = (req: Request, res: Response) => {
  console.log('page/paged');
};
const cats = (req: Request, res: Response) => {
  console.log('page/paged');
};
const fishes = (req: Request, res: Response) => {
  console.log('page/paged');
};

// eslint-disable-next-line import/prefer-default-export
export { home, dogs, cats, fishes };
