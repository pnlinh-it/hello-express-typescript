import * as http from 'http';
import { Server } from 'socket.io';

class SocketServer {
  private server!: Server;

  init(httpServer: http.Server) {
    this.server = new Server(httpServer, {
      transports: ['polling', 'websocket']
    });

    this.server.on('connection', (socket) => {
      socket.broadcast.to('').emit('hello', 'test');
      console.log(`New connection: ${socket.id}`);
    });
  }

  get io() {
    return this.server;
  }
}
export default new SocketServer();
