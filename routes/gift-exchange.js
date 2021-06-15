const express = require("express");
const GiftExchange = require("../model/gift-exchange")
const router = express.Router();


router.get("/", async (req, res, next) => {

    try {

        const list = await GiftExchange.participants;
        res.status(200).json(list);

    } catch(err) {
        next(err);
    }
});


// send data to server = use post request
// ":" is a place holder for a path parameter
router.post("/pairs", async (req, res, next) => {

    try {

        console.log(req.body);
        const names = req.body.names;
        const pairs = await GiftExchange.getPairs(names);
        res.status(200).json(pairs);

    } catch(err) {
        next(err);
    }
});


router.post("/traditional", async (req, res, next) => {

    try {

        const names = req.body.names;
        const pairs = await GiftExchange.getPairs(names);
        const traditional = await GiftExchange.getTraditional(pairs);
        res.status(200).json(traditional);

    } catch(err) {
        next(err);
    }
});


//exports router - so other applications can have access to this "router"
module.exports = router;