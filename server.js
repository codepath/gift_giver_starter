const express = require("express");
const morgan = require("morgan");
const giftsRouter = require("./routes/gift-exchange"); //automatically finds js files

const app = express();

app.use(morgan("tiny")); //allows you to choose how it logs (parameter)
app.use(express.json()); // this will make sure that anytime we send a post request
                            // express will parse that request as json

app.use("/gift", giftsRouter);

// this is how you start your server...
// this is "/" route...
app.get("/", (req, res, next) => {
    res.status(200).json({ping: "pong"});
});

// this is "/hey" route...
app.get("/hey", (req, res, next) => {
    res.status(200).json({hi: "hello"});
});

const port = 3000;

app.listen(port, () => {
    console.log(`🚀 Server listening on port ` + port);
});