const http = require('node:http')

const server = http.createServer((request,response)=>{
    response.end("Hi stranger")
})

server.listen(3000,()=>{
    console.log('Server running at port 3000')
})