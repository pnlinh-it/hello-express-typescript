import express, { Application } from 'express';
import compression from 'compression';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import router from './routes';
import exceptionHandler from './middlewares/exception.middleware';
import { connect } from 'mongoose';
import { createServer } from 'http';
import passport from 'passport';
import { localStrategy } from './modules/auth/strategies/local.strategy';
import { jwtStrategy } from './modules/auth/strategies/jwt.strategy';
import socketServer from './modules/socket/socket.server';

const ROUTE_PREFIX = '/api/v1';

const app: Application = express();

(async function () {
  await connect('mongodb://localhost:27017/test');
})();

app.use(compression());

app.use(morgan('dev'));

app.use(cors());

app.use(helmet());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const httpServer = createServer(app);
socketServer.init(httpServer);

app.use(ROUTE_PREFIX, router);

app.use(exceptionHandler);

app.use(passport.initialize());
passport.use(localStrategy);
passport.use(jwtStrategy);

httpServer.listen(3000, function () {
  console.log('App is running!');
});
