import createConnection from './db/connection';
import Hapi from '@hapi/hapi';
import configure from './config';
import routes from './routes/index';

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
})
export default async () => {
    configure();
    const connection = await createConnection();
    const server = Hapi.server({
        port: process.env.APP_PORT,
        host: process.env.APP_HOST
    });
    server.route(routes);

    if (connection.isConnected) {
        await server.start();
        console.log("DATABASE CONNECTED");
        console.log('Server running on %s', server.info.uri);
    } else {
        throw new Error('UNABLE TO CONNECT DATABASE')
    }
    return server.listener;
}

