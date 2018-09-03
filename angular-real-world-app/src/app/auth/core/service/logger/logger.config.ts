import { LoggerLevel } from './logger-lever.enum';

export class LoggerConfig {
  serverLogLevel: any;
  level: LoggerLevel;
  isProdMode = false;
  serverLoggingUrl?: string;
  userId: string;
}
