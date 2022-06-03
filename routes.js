// This file was added by layer0 init.
// You should commit this file to source control.

import { Router } from '@layer0/core/router'

// const ONE_HOUR = 60 * 60
// const ONE_DAY = 24 * ONE_HOUR

export default new Router()

  // BASIC_AUTH_USERNAME= rishi18304@iiitd.ac.in, BASIC_AUTH_PASSWORD= Layer0 by Limelight
  // Authorization: Basic cmlzaGkxODMwNEBpaWl0ZC5hYy5pbjpMYXllcjAgYnkgTGltZWxpZ2h0
  // Add environement variables: https://docs.layer0.co/guides/environments#environment-variables
  .requireBasicAuth({
    username: process.env.BASIC_AUTH_USERNAME || 'rishi18304@iiitd.ac.in',
    password: process.env.BASIC_AUTH_PASSWORD || 'Layer0 by Limelight',
  })

  // Here is an example where we cache api/* at the edge but prevent caching in the browser
  // .match('/api/:path*', ({ proxy, cache }) => {
  //   cache({
  //     edge: {
  //       maxAgeSeconds: ONE_DAY,
  //       staleWhileRevalidateSeconds: ONE_HOUR,
  //     },
  //     browser: {
  //       maxAgeSeconds: 0,
  //       serviceWorkerSeconds: ONE_DAY,
  //     },
  //   })
  //   proxy('origin')
  // })

  // send any unmatched request to origin
  .fallback(({ proxy }) => proxy('origin'))
