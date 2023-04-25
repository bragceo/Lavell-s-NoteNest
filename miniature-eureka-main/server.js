// Set up the server and define routes
const express = require('express');
const path = require('path');
const fs = require('fs');
const crypto = require("crypto");

const app = express();

const dbRoute = path.join(__dirname, 'db', 'db.json');

// Set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// PUBLIC ROUTES
//----------------------------------------------
// Define a route for the home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

//Define a route for the notes page
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'notes.html'));
});

// API ROUTES
//----------------------------------------------

// Define a route for getting notes
app.get('/api/notes', (req, res) => {
    fs.readFile(dbRoute, (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
    });
});

// Define a route for saving notes
app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    fs.readFile(dbRoute, (err, data) => {
        if (err) throw err;
        const notes = JSON.parse(data);
        newNote['id'] = crypto.randomBytes(16).toString("hex");
        notes.push(newNote);
        fs.writeFile(dbRoute, JSON.stringify(notes), (err) => {
            if (err) throw err;
            res.json(newNote);
        });
    });
});

// Define a route for deleting notes
app.delete('/api/notes/:id', (req, res) => {
    const id = req.params.id;
    fs.readFile(dbRoute, (err, data) => {
        if (err) throw err;
        const notes = JSON.parse(data);
        const filteredNotes = notes.filter(note => note.id !== id);
        fs.writeFile(dbRoute, JSON.stringify(filteredNotes), (err) => {
            if (err) throw err;
            res.json({ ok: true });
        });
    });
});


// Start the server
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
