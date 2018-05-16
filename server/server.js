const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const PORT = process.env.PORT || 4200;

module.exports = app;

const PUBLIC = path.join(
    __dirname, '..',
    process.env.NODE_ENV === 'production'
        ? '/client/build'
        : '/client/public'
);

const createApp = () => {

    //logging middleware
    app.use(morgan('dev'));

    //body parsing middleware
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    //api routes
    app.use('/api', require('./api'));

    // static file-serving middleware
    app.use(express.static(PUBLIC));

    // any remaining requests with an extension (.js, .css, etc.) send 404
.
    app.use((req, res, next) => {
        if (path.extname(req.path).length) {
            const err = new Error('Not found');
            err.status = 404;
            next(err);
        } else {
            next();
        }
    });

    // sends index.html
    app.use('*', (req, res) => {
        res.sendFile(path.join(PUBLIC, 'index.html'));
    });

    // error handling endware
    app.use((err, req, res, next) => {
        console.error(err);
        console.error(err.stack);
        res.status(err.status || 500).send(err.message || 'Internal server error.');
    });

}

const startListening = () => {
    const server = app.listen(PORT, () => console.log(`Serving the answers on ${PORT}`));
}
const syncDb = () => db.sync()

// This evaluates as true when this file is run directly from the command line,
// i.e. when we say 'node server/index.js' (or 'nodemon server/index.js', or 'nodemon server', etc)
// It will evaluate false when this module is required by another module - for example,
// if we wanted to require our app in a test spec
if (require.main === module) {
    sessionStore.sync()
        .then(syncDb)
        .then(createApp)
        .then(startListening);
} else {
    createApp();
}
