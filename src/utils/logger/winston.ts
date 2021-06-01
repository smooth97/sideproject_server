import winston from 'winston';
import expressWinston from 'express-winston';
import 'winston-daily-rotate-file';
import moment from 'moment';
import path from 'path';

const { combine, timestamp, label, printf, colorize, json } = winston.format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `[${moment(timestamp).format('YYYY-MM-DD HH:mm:ss')}] [${label}] [${level.toUpperCase()}] ${message}`;
});

const options = {
  console: {
    level: 'debug',
    handleException: true,
    json: false,
    colorize: false,
    format: combine(
      //colorize(),
      label({ label: 'SERVER' }),
      timestamp(),
      myFormat
    )
  },
  dailyFile: {
    level: 'info',
    filename: path.resolve(__dirname, '..', '..', '..', 'log', 'server_%DATE%.log'),
    handleException: true,
    json: false,
    colorize: false,
    datePattern: 'YYYYMMDD',
    zippedArchive: true,
    maxFiles: '30d',
    format: combine(
      label({ label: 'SERVER' }),
      timestamp(),
      myFormat
    )
  }
};

const transports = [
  new winston.transports.Console(options.console),
  new winston.transports.DailyRotateFile(options.dailyFile)
];

const logger = winston.createLogger({
  transports,
  exitOnError: false
});

export const loggerMiddleware = expressWinston.logger({
  transports,
  msg: `HTTP {{req.socket.remoteAddress}} "{{req.method}} {{req.url}}" {{res.statusCode}} - "{{req.headers['user-agent']}}"`
});

export default logger;