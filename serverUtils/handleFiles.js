const fs = require('fs');
const path = require('path');

module.exports = (url, res) => {
    if(url === '/'){
        url = '/index.html'
    }
    console.log(url);
    const pathStr = path.join(__dirname, `..${url}`);
    if(fs.existsSync(pathStr)){
        if(url.includes('.css')){
            res.writeHead(200, {"content-type": "text/css"});
        }else if(url.includes('.js')){
            res.writeHead(200, {"content-type": "text/javascript"});
        }
        res.write(fs.readFileSync(pathStr, 'utf-8'))
    }else{
        res.writeHead(404);
    }
}