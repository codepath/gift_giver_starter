const express = require("express");
const router = express.Router();

const gifts = {
    one: 0,
    two: 0,
    three: 0,
}

router.get("/", async (req, res, next) => {
    res.status(200).json(gifts);
});

// send data to server = use post request
// ":" is a place holder for a path parameter
router.post("/:giftName", async (req, res, next) => {
    console.log(req.params);

    const gname = req.params.giftName;
    if(gifts[gname] || gifts[gname] === 0) {
        gifts[gname] += 1;
    }    

    res.status(200).json(gifts)
});

//exports router - so other applications can have access to this "router"
module.exports = router;