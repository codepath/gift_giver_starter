const express = require("express");
const morgan = require("morgan");
const giftsRouter = require("./routes/gift-exchange"); //automatically finds js files
const { NotFoundError } = require("./utils/errors")

const app = express();

app.use(morgan("tiny")); //allows you to choose how it logs (parameter)
app.use(express.json()); // this will make sure that anytime we send a post request
                            // express will parse that request as json

app.use("/giftEx", giftsRouter);

// this is how you start your server...
// this is "/" route...
app.get("/", (req, res, next) => {
    res.status(200).json({ping: "pong"});
});

// this is "/hey" route...
app.get("/hey", (req, res, next) => {
    res.status(200).json({hi: "hello"});
});


// Handle all 404 errors that weren't matched by a route
app.use((req, res, next) => {
    return next(new NotFoundError());
});

// Generic error handler - anything that is unhandled will be handled here
app.use((err, req, res, next) => {

    const status = err.status || 500;
    const message = err.message;

    return res.status(status).json({
        error: { message, status }
    });
});


const port = 3000;
app.listen(port, () => {
    console.log(`🚀 Server listening on port ` + port);
});