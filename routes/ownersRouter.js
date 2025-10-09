const express = require('express');
const router = express.Router();
const ownerModel = require("../models/owner");

router.get("/", function (req, res) {
    res.send("hey this is owner");
})

if (process.env.NODE_ENV === "development") {
    router.post("/create", async function (req, res) {
        let owners = await ownerModel.find();
        if (owners.length > 0) {
            return res.status(503).send("You can't create another owner.");
        }

        let {fullname,email,password}=req.body;

        let createdOwner = await ownerModel.create({
            fullname,
            email,
            password,
        });
        res.status(201).send(createdOwner);
    });
}





module.exports = router;
