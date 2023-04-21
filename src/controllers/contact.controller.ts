import { Request, Response } from 'express'
import catchAsync from '../utils/catchAsync'


export const sendContactMessage = catchAsync(async (req: Request, res: Response): Promise<void> => {
  const { name, email, message } = req.body

  if (!name || !email || !message) {
    res.status(400).send('Le formulaire est incomplet.')
    return;
  }
});