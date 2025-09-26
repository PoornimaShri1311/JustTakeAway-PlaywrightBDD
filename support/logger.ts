import pino from 'pino';

/**
 * Logger utility using pino for pretty, colorized, and timestamped logs.
 *
 * @see {@link https://getpino.io/#/}
 */
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
