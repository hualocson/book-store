import * as dotenv from 'dotenv'
import path from 'path'
import {
  getOsEnvOptional,
  getOsEnv,
  normalizePort,
  toBool,
  toNumber
} from '~libs/os'

dotenv.config({
  path: path.join(
    process.cwd(),
    `.env${process.env.NODE_ENV === 'test' ? '.test' : ''}`
  )
})

const env = {
  node: process.env.NODE_ENV || 'development',
  isProduction: process.env.NODE_ENV === 'production',
  isTest: process.env.NODE_ENV === 'test',
  isDevelopment: process.env.NODE_ENV === 'development',
  app: {
    name: getOsEnv('APP_NAME'),
    host: getOsEnv('APP_HOST'),
    schema: getOsEnv('APP_SCHEMA'),
    routePrefix: getOsEnv('APP_ROUTE_PREFIX'),
    port: normalizePort(process.env.PORT || getOsEnv('APP_PORT')),
    banner: toBool(getOsEnv('APP_BANNER'))
  },
  database: {
    connection: getOsEnv('DB_CONNECTION')
  },
  log: {
    level: getOsEnv('LOG_LEVEL'),
    json: toBool(getOsEnvOptional('LOG_JSON')),
    output: getOsEnv('LOG_OUTPUT')
  },
  passport: {
    jwtToken: getOsEnv('PASSPORT_JWT'),
    jwtAccessExpired: toNumber(getOsEnv('PASSPORT_JWT_ACCESS_EXPIRED')),
    jwtRefreshExpired: toNumber(getOsEnv('PASSPORT_JWT_REFRESH_EXPIRED'))
  },
  swagger: {
    enabled: toBool(getOsEnv('SWAGGER_ENABLED')),
    route: getOsEnv('SWAGGER_ROUTE'),
    username: getOsEnv('SWAGGER_USERNAME'),
    password: getOsEnv('SWAGGER_PASSWORD')
  }
}

export default env
