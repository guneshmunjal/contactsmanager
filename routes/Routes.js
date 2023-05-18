const express = require("express");
const router=express.Router();

const {contactCreation} = require("../controller/createContact");
const { deletionContact } = require("../controller/deleteContact");
const {updationContact} = require("../controller/updateContact");

// mapping the controller

router.post("/createContacts/",
contactCreation
);

router.delete("/deleteContacts/:id",deletionContact);

router.put("/updateContact/:id",updationContact);

// exports
module.exports=router;