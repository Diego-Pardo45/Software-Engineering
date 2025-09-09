import express from 'express';
import morgan from 'morgan';

const app = express();
app.use(express.json());
app.use(morgan('dev'));

const PORT = 3000;

const students_list = [{"name": "Diego"}];

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});