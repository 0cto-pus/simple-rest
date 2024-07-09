import express from 'express';
import gradeRouter from './routes/gradeRoute';
const app = express();

app.use(express.json());

app.use('/api', gradeRouter);

export default app;
