const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`)
  next()
}

const yametekudasai = (req, res, next) => {
  res.setHeader('Content-type', 'application/json')
  next()
}
export { logger, yametekudasai };
