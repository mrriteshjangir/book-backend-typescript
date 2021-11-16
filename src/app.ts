import * as cors from 'cors';
import * as express from 'express';
import * as dotenv from 'dotenv';
import * as mongoose from 'mongoose';
import * as bookRoute from './routes/bookRoute';
const router = express();

dotenv.config();

const uri: string = process.env.MONGODB_URI as string;
mongoose.connect(uri);

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();
app.use(cors());
app.use(express.json());

/** Routes go here */
app.use('/api/', bookRoute);

const hostname = '127.0.0.1';

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});