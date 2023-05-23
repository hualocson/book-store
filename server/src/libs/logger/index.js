import winston from 'winston'
import env from '../../configs/env.js'

const transports = []
if (!env.isDevelopment) {
  transports.push(new winston.transports.Console())
} else {
  transports.push(
    new winston.transports.Console({
      handleExceptions: true,
      format: winston.format.combine(
        winston.format.cli(),
        winston.format.splat()
      )
    })
  )
}

const logger = winston.createLogger({
  level: env.log.level,
  levels: winston.config.npm.levels,
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    winston.format.printf(
      (info) => `${info.level}: ${[info.timestamp]}: ${info.message}`
    ),
    winston.format.errors({ stack: true }),
    winston.format.splat(),
    winston.format.align()
  ),
  transports
})

export default logger
