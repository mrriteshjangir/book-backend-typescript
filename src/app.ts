import * as cors from 'cors';
import * as express from 'express';
import * as dotenv from 'dotenv';
import * as mongoose from 'mongoose';
import * as bookRoute from './routes/bookRoute';
const router = express();

dotenv.config();

const uri: string = process.env.MONGODB_URI as string;
mongoose.connect(uri, (err: any) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log(`Connecting to MONGO`);
    }
});

if (!process.env.PORT) {
    console.log(`Error to get ports`);
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();
app.use(cors());
app.use(express.json());

/** Routes go here */
app.use('/api/', bookRoute);

app.get('/',(req,res)=>res.send('okay'));

const server = app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});