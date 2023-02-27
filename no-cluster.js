const http = require("http")

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
// we can also create multiple no of workers using pm2
// pm2 start no-cluster.js -i 0 , 0 means optimum number of workers