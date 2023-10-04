const http = require('http');

const server = http.createServer((req, res) => {
    // checks if user is on homepage
    if(req.url === '/') {
        res.end("Welcome to the homepage!");
    }
    
    // user tries to access non-existing subpages
    else {
        res.end(`<p>Oh no! That page does not exist.</p>
                <a href="/">Home</a>`);
    }
});

server.listen(3000);