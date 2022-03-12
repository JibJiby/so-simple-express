const express = require('express');
const cors = require('cors');

const app = express();

app.use(
    cors({
        origin: true,
        credentials: true,
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/test', (req, res, next) => {
    res.send('ok');
});

app.listen(3005, () => {
    console.log('Server Start!');
});
