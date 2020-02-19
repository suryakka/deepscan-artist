import { createConnection as connect } from 'typeorm';
import entities from './entities'


const createConnection = async () => {
    const connection = await connect({
        type: process.env.DB_DRIVER,
        host: process.env.APP_HOST,
        username: process.env.DB_USERNAME,
        password: process.env.PASSWORD,
        database: process.env.DB_NAME,
        synchronize: process.env.DB_SYNC,
        logging: process.env.DB_LOGGING,
        entities,
    });
    return connection;
}
export default createConnection;