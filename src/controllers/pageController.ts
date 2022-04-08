/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express';
import { createMenuObject } from '../helpers/createMenuObject';
import { Pet } from '../models/Pet';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const home = (req: Request, res: Response) => {
  const list = Pet.getAll();
  res.render('pages/page', {
    menu: createMenuObject('all'),
    banner: {
      title: 'All animals',
      background: 'allanimals.jpg',
    },
    list,
  });
};
const dogs = (req: Request, res: Response) => {
  const list = Pet.getFromType('dog');
  res.render('pages/page', {
    menu: createMenuObject('dog'),
    banner: {
      title: 'Dogs',
      background: 'banner_dog.jpg',
    },
    list,
  });
};
const cats = (req: Request, res: Response) => {
  const list = Pet.getFromType('cat');
  res.render('pages/page', {
    menu: createMenuObject('cat'),
    banner: {
      title: 'Cats',
      background: 'banner_cat.jpg',
    },
    list,
  });
};
const fishes = (req: Request, res: Response) => {
  const list = Pet.getFromType('fish');
  res.render('pages/page', {
    menu: createMenuObject('fish'),
    banner: {
      title: 'Fishes',
      background: 'banner_fish.jpg',
    },
    list,
  });
};

// eslint-disable-next-line import/prefer-default-export
export { home, dogs, cats, fishes };
