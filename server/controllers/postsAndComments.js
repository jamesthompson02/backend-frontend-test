const express = require('express');
const router = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded({extended: false});



router.use(cors());

router.use(express.json());

router.get('/', (req, res) => {
    res.json();
})

router.get('/career', (req, res) => {
    res.json();
})

router.post('/career', urlEncodedParser, (req, res) => {
    const { title, category, story } = req.body;
    console.log(req.body);
    if ( title && category && story) {
        return res.json({
            "title": title,
            "category": category,
            "story": story
        })
    }

})

// app.get('/:category', (req, res) => {
//     res.json();
// })

// app.get('/:category/:id', (req, res) => {
//     res.send('');
// })

// app.get('/:category/:id/comments', (req, res) => {
//     res.send('');
// })

router.all('*', (req, res) => {
    res.send(`<h1>Error, broken URL</h1>`);
})

module.exports = router;