/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express';
import { createMenuObject } from '../helpers/createMenuObject';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const home = (req: Request, res: Response) => {
  res.render('pages/page', {
    menu: createMenuObject('all'),
    banner: {
      title: 'All animals',
      background: 'allanimals.jpg',
    },
  });
};
const dogs = (req: Request, res: Response) => {
  res.render('pages/page', {
    menu: createMenuObject('dog'),
    banner: {
      title: 'Dogs',
      background: 'banner_dog.jpg',
    },
  });
};
const cats = (req: Request, res: Response) => {
  res.render('pages/page', {
    menu: createMenuObject('cat'),
    banner: {
      title: 'Cats',
      background: 'banner_cat.jpg',
    },
  });
};
const fishes = (req: Request, res: Response) => {
  res.render('pages/page', {
    menu: createMenuObject('fish'),
    banner: {
      title: 'Fishes',
      background: 'banner_fish.jpg',
    },
  });
};

// eslint-disable-next-line import/prefer-default-export
export { home, dogs, cats, fishes };
