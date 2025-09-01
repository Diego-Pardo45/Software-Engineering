import express from 'express';
import morgan from 'morgan';

const app = express();
app.use(express.json());
app.use(morgan('dev'));

const PORT = 3000;

const students_list = [{"name": "Diego"}];

app.get('/', (req, res) => {
    res.send('The list of students is: ' + JSON.stringify(students_list));
});

app.get('/other', (req, res) => {
    res.send('This is the other route!');
});

app.post('/name', (req, res) => {
    const body = req.body;
    students_list.push(body);
    res.send('POST request to the "name" route');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});