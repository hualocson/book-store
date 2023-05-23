import basicAuth from 'express-basic-auth'
import swagger from 'swagger-ui-express'
import swaggerJsDoc from 'swagger-jsdoc'

import env from '~configs/env'

export default (app) => {
  const swaggerOptions = {
    swaggerDefinition: {
      openapi: '3.0.3',
      info: {
        title: env.app.name,
        description: env.app.description,
        version: env.app.version,
        contact: {
          name: 'Loc Son',
          email: 'hualocson@gmail.com'
        },
        license: {
          name: 'Hua Loc Son',
          url: 'https://github.com/hualocson/'
        }
      },
      servers: [
        {
          url: `${env.app.schema}://${env.app.host}:${env.app.port}${env.app.routePrefix}`
        }
      ]
    },
    apis: ['src/docs/*.yml', 'src/apis/routes/v1/*.js']
  }

  if (env.isDevelopment) {
    app.use(
      env.swagger.route,
      env.swagger.username
        ? basicAuth({
            users: {
              [`${env.swagger.username}`]: env.swagger.password
            },
            challenge: true
          })
        : (req, res, next) => next(),
      swagger.serve,
      swagger.setup(swaggerJsDoc(swaggerOptions))
    )
  }
}
