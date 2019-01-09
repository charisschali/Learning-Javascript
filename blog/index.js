const config = require('./config/config');
const app = require('./server');
const logger = require('./utils/logger')

app.listen(config.port);
logger.log('listening on http://localhost:' + config.port);