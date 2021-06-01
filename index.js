const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger');
const members = require('./Members');
const app = express();

// app.get('/', (req, res) => {
//     // res.send('<h1>Hello World!!</h1>')
//     res.sendFile(path.join(__dirname, 'public', 'index.html'))
// })

// Init middleware function
// app.use(logger);

// Handlebars Middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Body Parser Middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Note: You do not usually have template and static pages together

// Homepage route (template pages)
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Member App',
        members: members
    })
})

// Set static folder (static pages)
app.use(express.static(path.join(__dirname, 'public')));

// Members API Routes
app.use('/api/members', require('./routes/api/members'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on: ${PORT}`));
