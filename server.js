const express = require('express');
const path = require('path');
const savedNotes = require("./db/db.json");

const app = express();

const PORT = process.env.PORT || 8080

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('/api/notes', (req, res) => res.json(savedNotes));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.post('/api/notes', (req, res) => {
    savedNotes.push(req.body);
    // console.log(savedNotes);
})









app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});