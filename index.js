const express = require('express');
const path = require('path');
const members = require('./Members')
const logger = require('./middleware/logger')
const app = express();

// app.get('/', (req, res) => {
//     // res.send('<h1>Hello World!!</h1>')
//     res.sendFile(path.join(__dirname, 'public', 'index.html'))
// })



// Init middleware function
app.use(logger);

// Gets all members
app.get('/api/members', (req, res) => {
    res.json(members);
})

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on: ${PORT}`));
