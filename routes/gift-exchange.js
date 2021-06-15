const express = require("express");
const GiftExchange = require("../model/gift-exchange")
const router = express.Router();


router.get("/", async (req, res, next) => {

    const glist = await GiftExchange.tallyVotes();
    res.status(200).json(glist);
});


// send data to server = use post request
// ":" is a place holder for a path parameter
router.post("/pairs", async (req, res, next) => {
    
    const names = req.body.names;
    const pairs = await GiftExchange.getPairs(names);
    res.status(200).json(pairs);
});


router.post("/traditional", async (req, res, next) => {
    
    const names = req.body.names;
    const pairs = await GiftExchange.getPairs(names);
    const traditional = await GiftExchange.getTraditional(pairs);
    res.status(200).json(traditional);
});


//exports router - so other applications can have access to this "router"
module.exports = router;