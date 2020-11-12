// 导入webSocket模块:
const webSocket = require('ws');
import { getCookie } from './utils/cookie';
// 引用Server类:
const webSocketServer = webSocket.Server;
function createMessage(
	type: string,
	user: string,
	msg: string,
	time: number
): string {
	let data: SocketData = {
		type,
		user,
		msg,
		time,
	};
	return JSON.stringify(data);
}
export default function initSocket(server: object): void {
	console.log(typeof server);
	let wss = new webSocketServer({ server });
	// 广播方法
	wss.broadcast = function (data: string): void {
		wss.clients.forEach(function (client: any) {
			client.send(data, (err: any) => {
				if (err) {
					console.log(`[SERVER] error: ${err}`);
				}
			});
		});
	};
	wss.on('connection', function (ws: any, req: any): void {
		let user: string = getCookie(req.headers.cookie, 'currentUser');
		let time: number = Date.now();
		let data: string = createMessage('join', user, '', time);
		wss.broadcast(data);
		ws.on('message', function (message: string) {
			let msg: string = createMessage('', user, message, time);
			wss.broadcast(msg);
		});
	});
}
