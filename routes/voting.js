const express = require("express");
const router = express.Router();

const voting = {
    cheese: 0,
    pepporoni: 0,
    veggies: 0,
}

router.get("/", async (req, res, next) => {
    res.status(200).json(voting);
});

// send data to server = use post request
// ":" is a place holder for a path parameter
router.post("/:pizzaName", async (req, res, next) => {
    console.log(req.params);

    const pname = req.params.pizzaName;
    if(voting[pname] || voting[pname] === 0) {
        voting[pname] += 1;
    }    

    res.status(200).json(voting)
});

//exports router - so other applications can have access to this "router"
module.exports = router;