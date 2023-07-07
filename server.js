const http = require('http');
const handleFiles = require('./serverUtils/handleFiles')
const PORT = 9567;

const server = http.createServer();
server.on('request', (req, res) => {
    if(req && req.url){
        try {
            const urlStr = req.url;
            handleFiles(urlStr, res);
            res.end();
        } catch (error) {
            
        }
    }
    
});
server.listen(PORT, (err) => {
    if(err){
        console.log(err)
    }
    console.log(new Date(), `服务已启动：${PORT}`)
})
// 监听进程uncaughtException异常事件，防止进程中断
process.on('uncaughtException', (err) => {
    console.log(err);
})