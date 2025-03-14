const express = require('express');
const app = express();

// 定义主页路由
app.get('/', (req, res) => {
    res.send('<h1>Welcome to my Node.js server!</h1>');
});

// 启动服务器监听端口
app.listen(3000, () => console.log('Server running on http://localhost:3000'));