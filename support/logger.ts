import pino from 'pino';

const logger = pino({
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,          // adds colors
      translateTime: 'HH:MM:ss', // human-readable timestamp
      ignore: 'pid,hostname'   // optional: hide pid & hostname
    }
  }
});

export default logger;
