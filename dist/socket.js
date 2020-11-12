"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 导入webSocket模块:
const webSocket = require('ws');
const cookie_1 = require("./utils/cookie");
// 引用Server类:
const webSocketServer = webSocket.Server;
function createMessage(type, user, msg, time) {
    let data = {
        type,
        user,
        msg,
        time,
    };
    return JSON.stringify(data);
}
function initSocket(server) {
    console.log(typeof server);
    let wss = new webSocketServer({ server });
    // 广播方法
    wss.broadcast = function (data) {
        wss.clients.forEach(function (client) {
            client.send(data, (err) => {
                if (err) {
                    console.log(`[SERVER] error: ${err}`);
                }
            });
        });
    };
    wss.on('connection', function (ws, req) {
        let user = cookie_1.getCookie(req.headers.cookie, 'currentUser');
        let time = Date.now();
        let data = createMessage('join', user, '', time);
        wss.broadcast(data);
        ws.on('message', function (message) {
            let msg = createMessage('', user, message, time);
            wss.broadcast(msg);
        });
    });
}
exports.default = initSocket;
