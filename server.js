const { createServer } = require("http")
const port = process.env.PORT || 3000

const requestHandler = (request, response) => {
    const url = new URL (request.url,`http://${request.headers.host}`)
    const name = url.searchParams.get('name') || "world"
    response.end(`Hello ${name} from NodeJs Sever`)
}

const server = createServer(requestHandler)

server.on('error', (err) => {
    console.log("Something wrong with the server")
})

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})