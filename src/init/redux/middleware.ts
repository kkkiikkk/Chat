// Middlewares
import { Middleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';

const isDev = process.env.NODE_ENV === 'development';
const sagaMiddleware = createSagaMiddleware();

<<<<<<< HEAD:src/init/redux/middleware.ts
const middleware: Middleware[] = [ sagaMiddleware, thunk ];
=======
const middleware: Middleware[] = [ sagaMiddleware ];
>>>>>>> d11fd3327596b6cf0668d67ebe514215fe4aac62:src/init/redux/middlewares/index.ts

isDev && middleware.push(
    createLogger({
        duration:  true,
        collapsed: true,
        colors:    {
            title:     () => '#139BFE',
            prevState: () => '#1C5FAF',
            action:    () => '#149945',
            nextState: () => '#A47104',
            error:     () => '#ff0005',
        },
    }),
);

export { middleware, sagaMiddleware };
