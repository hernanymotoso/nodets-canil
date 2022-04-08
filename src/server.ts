import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import Routes from './routes';

dotenv.config();

const app = express();

// Config view engine;
app.set('view engine', 'mustache');
app.set('views', path.join(__dirname, 'views'));
app.engine('mustache', mustache());

// Config static files
app.use(express.static(path.join(__dirname, '../public')));

// Rotas
app.use(Routes);
app.use((req, res) => {
  res.send('Page not found');
});

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT} `);
});
