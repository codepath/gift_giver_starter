const express = require("express");
const GiftExchange = require("../model/gift-exchange")
const router = express.Router();

router.get("/", async (req, res, next) => {

    const glist = await GiftExchange.tallyVotes();
    res.status(200).json(glist);
});

// send data to server = use post request
// ":" is a place holder for a path parameter
router.post("/:giftName", async (req, res, next) => {

    console.log(req.body);

    const gname = req.params.giftName;
    const user = req.body.user;
    const glist = await GiftExchange.recordVote(gname, user);
    res.status(200).json(glist);
});

//exports router - so other applications can have access to this "router"
module.exports = router;