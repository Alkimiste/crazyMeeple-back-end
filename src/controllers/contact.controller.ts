import { Request, Response } from 'express';
import catchAsync from '../utils/catchAsync';
import { webhook } from '../config/slack';

export const sendContactMessage = catchAsync(async (req: Request, res: Response): Promise<void> => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    res.status(400).send('Le formulaire est incomplet.');
    return;
  }

  const slackMessage = `Nouveau message de ${name} (${email}) : ${message}`;

  try {
    await webhook.send({
      text: `*[Boilerplate]*\n${slackMessage}`
    });
 
    res.status(200).send('Le message a été envoyé avec succès.');
  } catch (err) {
    console.error(err);
    res.status(500).send('Une erreur s\'est produite lors de l\'envoi du message.');
  }
});