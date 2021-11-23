import * as cors from 'cors';
import * as express from 'express';
import * as dotenv from 'dotenv';
import * as mongoose from 'mongoose';
import bookRoute from './routes/bookRoute';
import auditRoute from './audit_logs/route';
const router = express();

dotenv.config();

const uri: string = process.env.MONGODB_URI as string;
mongoose.connect(uri,{useNewUrlParser: true,useUnifiedTopology: true });

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();
app.use(cors());
app.use(express.json());

/** Routes go here */
app.use('/api/',[bookRoute,auditRoute]);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});