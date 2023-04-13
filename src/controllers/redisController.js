import redis from '../config/redis.js'

export const test = async (req, res, next) => {
  const result = await redis.get('test')
  res.send(result)
}

