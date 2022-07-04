const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;
const postsAndComments = require('./controllers/postsAndComments')


app.use('/api/posts', postsAndComments);

app.use(express.urlencoded({extended: false}));

app.use(express.json());

// app.use(cors({
//     origin: 'http://127.0.0.1:5500'
// }));

app.use(cors());

app.get('/', (req, res) => {
    res.send('This is my axios test homepage');
})


app.listen(port, () => {
    console.log(`This server is now running at port ${port}`);
})