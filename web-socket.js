const socket = require('websocket-stream');

const stream = socket('ws://localhost:8099');
stream.write('hello\n');

