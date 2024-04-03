import express, { Router, Request, Response } from 'express';
import prisma from '../../../prisma';

const router: Router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  const emoji = await prisma.emoji.findMany();

  res.json(emoji);
});

router.post('/', async (req: Request, res: Response) => {
  const emoji = await prisma.emoji.create({
    data: req.body,
  });

  res.json(emoji);
});

export default router;
