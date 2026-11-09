import { Router } from 'express';
import { listDrinks, getDrink, addDrink, deleteDrink } from '../controllers/drinkController.ts';
import { preventCaching } from '../middleware/preventCaching.ts';

export const drinkRoutes = Router();

drinkRoutes.use(preventCaching);

drinkRoutes.get('/', listDrinks);
drinkRoutes.get('/:id', getDrink);
drinkRoutes.post('/', addDrink);
drinkRoutes.delete('/:id', deleteDrink);
