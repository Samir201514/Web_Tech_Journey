const http = require("node:http");

const port = process.env.PORT || 3001;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end("<h1> Hello World! </h1>");
    }
    else if (req.url === '/home') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end("<h2> This is Home Page. </h2>");
    }
    else{
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end("<h1> 404 - Not Found! </h1>")
    }

});

server.listen(port, () => {
    console.log(`Server is Running on Port ${port}...`);
});