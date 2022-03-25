import { getServerUrl } from '../../utils/server';
import pgPromise from 'pg-promise';

const pgp = pgPromise({ noWarnings: true });
const db = pgp(getServerUrl())

export default async (req, res) => {
    try {
        const exercises = await db.multi('SELECT * from exercise');
        res.status(200).json(exercises);
    } catch (error) {
        console.error(error);
        res.status(500).send({error: error})
    }
};
