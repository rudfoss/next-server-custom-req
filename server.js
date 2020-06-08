const express = require("express")
const next = require("next")

const dev = process.env.NODE_ENV !== "production"

const start = async () => {
  console.log("booting...")
  const server = express()
  const app = next({ dev, dir: __dirname })
  const handle = app.getRequestHandler()
  await app.prepare()

  server.use((req, res, next) => {
    req.user = {
      authenticated: false,
      name: "John Doe",
    }
    next()
  })

  server.get("*", handle)

  server.listen(3000, (err) => {
    if (err) {
      console.error(err)
      process.exit(1)
    }

    console.log("ready")
  })
}

start().catch((error) => {
  console.error(error)
  process.exit(1)
})
