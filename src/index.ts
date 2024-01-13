import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';
import { query } from '../services/db';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get('/',async (_req: Request, res: Response) => {
  let data = await query("SELECT * FROM dept", null);
  res.json({ "data": data});
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});