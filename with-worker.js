const http = require("http")
const {Worker} = require("node:worker_threads");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "Content-type": "text/plain" })
        res.end("Home Page")
    } else if (req.url === "/slow-page") {
        const worker = new Worker("./cpu-intensive-task.js")
        // it uses the current instance of V8, event loop and memory
  
        worker.on("message", j => {
            res.writeHead(200, { "Content-type": "text/plain" })
            res.end(`Slow Page ${j}`)
        })
    }
})

server.listen(8000, () => console.log("Server is listening on PORT = ", 8000))