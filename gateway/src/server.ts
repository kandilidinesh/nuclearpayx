import app from './app';
import logger from './utils/logger';

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    logger.info(`NuclearPayX Gateway running on port ${PORT}...`);
});
