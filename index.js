const express = require('express');

const app = express();

// require('./routes/root')(app);

app.use(express.static("client/build"));

const path = require('path');
    
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "about.html"));
})

app.get('/services', (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "services.html"));
})

app.get('/portfolio', (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "portfolio.html"));
})

app.get('/blog', (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "blog.html"));
})

app.get('/contact', (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "contact.html"));
})

app.use('/images',express.static(path.join(__dirname, 'frontend/images')));
app.use('/js',express.static(path.join(__dirname, 'frontend/js')));
app.use('/styles',express.static(path.join(__dirname, 'frontend/styles')));
app.use('/plugins',express.static(path.join(__dirname, 'frontend/plugins')));

const PORT = process.env.PORT || 3030;
app.listen(PORT);
console.log("Server listening on port", PORT);