import expressLoader from '~loaders/expressLoader'
import swaggerLoader from '~loaders/swaggerLoader'

// Init loaders
const initApp = async () => {
  const app = expressLoader()
  swaggerLoader(app)
  return app
}

export default initApp
