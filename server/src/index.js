import http from 'http'
import env from './configs/env.js'
import initApp from './app.js'
import logger from '~libs/logger/index'
import bannerLogger from '~libs/banner/index.js'

initApp()
  .then((app) => {
    const server = http.createServer(app)
    server
      .listen(env.app.port, () => {
        bannerLogger(logger)
      })
      .on('error', (err) => {
        logger.error(err)
        process.exit(1)
      })
  })
  .catch((err) => {
    logger.error(err)
    process.exit(1)
  })
