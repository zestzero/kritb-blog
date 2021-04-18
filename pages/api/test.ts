// import db from 'services/DatabaseService';
import type { NextApiRequest, NextApiResponse } from 'next'
import { FirebaseService } from 'services/FirebaseService';

export default async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    const app = FirebaseService.App;
    const entries = await app.database().ref('test').get();
    const entriesData = entries && entries.child('0');

    res.status(200).json({ entriesData });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};
