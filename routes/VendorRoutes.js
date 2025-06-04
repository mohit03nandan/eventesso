const express = require('express')
const verifyToken = require("../middleware/Token")
const router = express.Router()

const {vendorsOrganizationInfo,addOrganizationDetails} = require("../controllers/VenorsInfo");


router.post("/organization",verifyToken, vendorsOrganizationInfo);
router.post("/organization/details",verifyToken, addOrganizationDetails);

module.exports = router;