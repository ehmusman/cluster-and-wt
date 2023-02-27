const http = require("http")

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "Content-type": "text/plain" })
        res.end("Home Page")
    } else if (req.url === "/slow-page") {

        res.writeHead(200, { "Content-type": "text/plain" })
        res.end(`Slow Page ${j}`)
    }
})

server.listen(8000, () => console.log("Server is listening on PORT = ", 8000))