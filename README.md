# jibb-jssdk

For SDK Documentation please visit: https://jibb-open.github.io/jssdk/

# Install from npm 
```
npm i @jibb-open/jssdk
```
npm page: [here](https://www.npmjs.com/package/@jibb-open/jssdk)

# Development

Use Node.js 22 (`nvm use`), then run `npm ci`. Run `npm test` for the SDK build
and dependency compatibility checks, `npm run build-macro` for the Webex macro,
and `npm run watch` to rebuild the SDK when source files change. Continue using
`dist` for local linking and publishing.

The tests use mocked HTTP adapters, sockets, and clocks; they do not require
API credentials or a running JIBB service. `npm run coverage` reports local
test coverage, and `npm run docs` generates the API reference in `docs/`.

# Configuration and authentication

For a local build, import the compiled API and configuration modules:

```js
import JIBB from "./dist/api/index.js"
import { Config } from "./dist/config.js"

Config.setApiBaseURL("https://api.jibb.ai") // Optional; this is the default.
JIBB.Auth.configure({ apiKey: process.env.JIBB_API_KEY })

try {
  const claims = await JIBB.Auth.getUserClaims()
  console.log(claims.getUserId())
} catch (error) {
  console.error(error.response?.status, error.message)
} finally {
  JIBB.Auth.logout()
}
```

For the installed flat package, the equivalent module paths are
`@jibb-open/jssdk/api/index.js` and `@jibb-open/jssdk/config.js`.
Browser apps should bundle these ES modules and use an ID-token provider
instead of embedding an API key:

```js
JIBB.Auth.configure({
  getIdToken: async () => identityClient.getIdToken(),
})
const token = await JIBB.Auth.getUserToken({ minExpiry: 300 })
```

`identityClient` represents your application's identity provider. The callback
must return its current ID token; the SDK exchanges it for a JIBB user token.

Each call to `Auth.configure()` replaces the previous credentials and clears
the token cache. If both credentials are provided, the API key takes
precedence. `Auth.logout()` clears the API key, ID-token callback, and cached
tokens. Pending refreshes from an earlier configuration are rejected.

Tokens are cached separately for user, admin, and superadmin access levels.
`getUserToken()` refreshes when fewer than 1,800 seconds remain by default.
`minExpiry` is in seconds; zero disables proactive refresh. Tokens with 60
seconds or less remaining, or with an invalid/missing expiry, are unusable.
If refreshing fails, a cached token is returned only if it still has more
than 60 seconds remaining at that time. Otherwise the refresh error is thrown.
An unusable token returned by the server is rejected as well.

`UserClaims` and `MeetingClaims` expose `getSecondsUntilExpiry()` in seconds,
`getHoursUntilExpiry()` in whole hours, and `isExpired()` with the same
60-second margin. Claims decoding does not verify token signatures.

# Requests and errors

API calls return promises. HTTP errors preserve the Axios error, including
`error.response.status` and `error.response.data` when a response exists.
Network errors may have no `response`. Catch errors at the application boundary:

```js
try {
  const meetings = await JIBB.Meeting.getMeetingList()
  console.log(meetings)
} catch (error) {
  if (error.response?.status === 401 || error.response?.status === 403) {
    // Request fresh credentials or ask the user to sign in again.
  } else {
    console.error("Meeting request failed", error.message)
  }
}
```

Requests may begin immediately after importing the API; HTTP transport loading
is awaited internally. GET options are copied rather than modified in place.

# WebSocket connections

The compiled `dist/ws/index.js` module exports `MeetingConnection`, `IPSA`, and
`EventBusConnection`. For example, once authenticated:

```js
import { EventBusConnection } from "./dist/ws/index.js"

const connection = EventBusConnection.getInstance()
const listenerId = connection.addEventListener({
  onConnected: () => console.log("Connected"),
  onError: error => console.error(error.message),
})
connection.start()

// When leaving the screen or signing out:
connection.stop()
connection.removeEventListener(listenerId)
JIBB.Auth.logout()
```

Transient connection setup failures retry with exponential backoff, up to the
configured retry count and maximum interval. `maxRetryCount: 0` permits the
initial attempt only. Permission, session-timeout, and connection-limit errors
stop retries. `stop()` cancels retries and expiry timers, closes the socket,
and prevents pending connection attempts from opening a socket afterward.
Queued writes reject when their connection is disconnected. Late events from
an older socket do not affect a replacement connection.

# Packaging

AWS CodeBuild is the only npm publisher. Its existing production-stage
publishing and repository mirroring remain in `buildspec.yml`.

The package allowlist includes compiled JavaScript, the README, and the ISC
license; source files, tests, scripts, and build configuration are excluded.

# Webex Devices
Run `npm run build-macro` to generate `dist/jibb_WebexXapi.js`. In a Webex macro,
use its named `JIBB` export:

```js
import { JIBB } from "./jibb_WebexXapi"

JIBB.Auth.configure({ apiKey: "YOUR_DEVICE_API_KEY" })
const claims = await JIBB.Auth.getUserClaims()
console.log(claims.getUserId())
```

The macro uses the device's `xapi` HTTP client. It exports authentication,
configuration, meeting, event-bus API, recording, and share-status helpers.
The WebSocket classes are part of the Node/browser SDK.

For webex macro example download from: https://github.com/jibb-open/jssdk/releases

Please visit [here](https://jibb-open.github.io/jssdk/Examples.html) for more information about the examples.

