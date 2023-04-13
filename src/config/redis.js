import Redis from 'ioredis'
import config from 'config'

export default new Redis(config.get('redis'))
