import { MongoConnection } from './db/MongoConnection';
import express from 'express';
import routes from './routes/shortener.route';

const app = express();

app.use(express.json());

const db = new MongoConnection();
db.connect();

app.use(routes)

app.listen(3000,()=>{
    console.log('Server running at http://localhost:3000')
});