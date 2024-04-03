import express from 'express';
import cors from 'cors';
import appSetup from './init';
import {
  notFound,
  errorHandler,
} from './middleware';
import api from './api';

require('dotenv').config();
const app = express();

appSetup(app);
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Hello Express!',
  });
});

app.use('/api/v1', api);

app.use(notFound);
app.use(errorHandler);

export default app;
