export interface LoggerInterface {
  info(msg: string, data?: any): void;
  warn(msg: string, data?: any): void;
  error(msg: string, data?: any): void;
  debug(msg: string, data?: any): void;
  log(msg: string, data?: any): void;
}

export interface BrowserInfoInterface {
  browserVersion: string;
  browserName: string;
  browserPlatform: string;
  resolution: any;
  localDBSpace: string;
}
export interface LoggerPayloadInterface {
  loggerType?: string;
  browserInfo?: BrowserInfoInterface;
  userInfo?: any;
  timestamp: string;
  callerDetails: any;
  data: any;
  msg: any;
}
