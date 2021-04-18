import DatabaseService from 'services/DatabaseService';
import type { NextApiRequest, NextApiResponse } from 'next';

const database = new DatabaseService();

export default async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    const entries = await database.fetch('test');
    res.status(200).json({ entries });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};
