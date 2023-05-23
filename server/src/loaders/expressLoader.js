import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import xss from 'xss-clean'
import morgan from 'morgan'
import compression from 'compression'

import { errorHandler, errorConverter } from '~middlewares/error'

export default () => {
  const app = express()

  // set log request
  app.use(morgan('dev'))

  // set security HTTP headers
  app.use(helmet())

  // parse json request body
  app.use(express.json())

  // parse urlencoded request body
  app.use(express.urlencoded({ extended: true }))

  // sanitize request data
  app.use(xss())

  // gzip compression
  app.use(compression())

  // set cors blocked resources
  app.use(cors())
  app.options('*', cors())

  // api routes
  // app.use(env.app.routePrefix, routeConfig)

  app.get('/status', (req, res) => {
    res.status(200).end()
  })
  app.head('/status', (req, res) => {
    res.status(200).end()
  })

  // convert error to ApiError, if needed
  app.use(errorConverter)

  // handle error
  app.use(errorHandler)

  return app
}
