import express from 'express';
import cors from 'cors';
import { connectDB } from './db.ts';
import { requestLogger } from './middleware/requestLogger.ts';
import { drinkRoutes } from './routes/drinkRoutes.ts';

const app = express();
const port = Number(process.env.PORT ?? 3000);

app.use(requestLogger);

// So würde es aussehen wenn man direkt in der App.ts eine Middleware schreibt:
/* app.use((req, _res, next) => {
    const timestamp = new Date().toISOString();

    console.log(`[${timestamp}] ${req.method} ${req.path}`);

    next();
});
*/

app.use(cors({ origin: 'http://localhost:5500' }));
app.use(express.json());
app.use('/drinks', drinkRoutes);

app.use((_req, res) => {
    res.status(404).send('Route nicht gefunden.');
});

await connectDB();

app.listen(port, 'localhost', () => {
    console.log('http://localhost:' + port);
});
