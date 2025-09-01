import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/other', (req, res) => {
    res.send('This is the other route!');
});

app.post('/name', (req, res) => {
    res.send('POST request to the name route');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});