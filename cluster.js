const http = require("http")
const OS = require("os")
const cluster = require("node:cluster")
console.log(OS.cpus().length)

if(cluster.isMaster){
    console.log(`Master Process ${process.pid} is running`)
    cluster.fork()
    // cluster.fork()
    // cluster.fork()
    // cluster.fork()
    // cluster.fork()
    // cluster.fork()
    // cluster.fork()
    // cluster.fork()
    // we can fork as much as the cores of CPUs
    // on every fork a new instance of V8, memory and event loop is created for each child process.
}
else{
    console.log(`Worker Process ${process.pid} is started`)

    const server = http.createServer((req,res) => {
        if(req.url === "/"){
        res.writeHead(200, {"Content-type": "text/plain"})
        res.end("Home Page")
    } else if(req.url === "/slow-page"){
        for(let i=0;i<6000000000; i++){}
        res.writeHead(200, { "Content-type": "text/plain" })
        res.end("Slow Page")
    }
})
server.listen(8000 , ()=> console.log("Server is listening on PORT = ", 8000))
}