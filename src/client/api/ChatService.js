import io from 'socket.io-client';

class ChatService {
  constructor(url) {
    this.url = url;
  }

  connect() {
    this.socket = io(this.url);

    return new Promise((resolve, reject) => {
      this.socket.on('connect', () => resolve());
      this.socket.on('connect_error', (error) => reject(error));
    });
  }

  disconnect() {
    return new Promise((resolve) => {
      this.socket.disconnect(() => {
        this.socket = null;
        resolve();
      });
    });
  }

  sendMessage(payload) {
    return this.emit('message', payload);
  }

  sendCommand() {
    return this.emit('command');
  }

  onMessage(callback) {
    this.on('message', callback);
  }

  onCommand(callback) {
    this.on('command', callback);
  }

  emit(event, data) {
    return new Promise((resolve, reject) => {
      if (!this.socket) return reject('No socket connection.');

      return this.socket.emit(event, data, (response) => {
        if (response.error) {
          console.error(response.error);

          return reject(response.error);
        }

        return resolve();
      });
    });
  }

  on(event, fn) {
    return new Promise((resolve, reject) => {
      if (!this.socket) return reject('No socket connection.');

      this.socket.on(event, fn);
      resolve();
    });
  }
}

export default ChatService;
