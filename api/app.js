import { createServer } from "http";

createServer(async (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept, Authorization, Origin')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')

    const url = new URL(req.url, `http://${req.headers.host}`);
    const method = req.method;
    let response = JSON.stringify([]);

    switch (url.pathname) {
        case "/users":
            console.log("users");
        break;
        case "/checkUser":

        break;
        case "/projects":

        break;
        default:
            response = null;
        break;
    }

    res.write(JSON.stringify(response));
    res.end();
}).listen(3002);