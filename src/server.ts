import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import { roomRouter } from './routes/room.router';
import { roomTypeRouter } from './routes/roomType.router';
import { authRouter } from './routes/auth.route';
import { userRouter } from './routes/user.route';

const PORT = process.env.PORT || 5005;
const app = express();

app.use(express.json());

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  }),
);

app.use(cookieParser());

app.use(express.static('static'));

app.use('/rooms', roomRouter);
app.use('/roomTypes', roomTypeRouter);
app.use(authRouter);
app.use('/users', userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
