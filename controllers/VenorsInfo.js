const  {VendorOrganizationInfo , OrganizationDetails } = require("../models/VendorOrganizationInfo")

const vendorsOrganizationInfo = async (req, res) => {
  try {
    const { NameofOrganization, BuisnessEmail, OfficePhone, OrganizationAddress, RefuserID } = req.body;
    const existingMail = await VendorOrganizationInfo.findOne({ BuisnessEmail });
    if (existingMail) {
      return res.status(400).json({ message: "Business email already exists. Please try with another one." });
    }
    if(!RefuserID){
        return res.status(400).json({ message: "Please provide RefuserID" });
    }
    const newVendorOrganizationInfo = new VendorOrganizationInfo({
      NameofOrganization,
      BuisnessEmail,
      OfficePhone,
      OrganizationAddress,
      RefuserID
    });

    await newVendorOrganizationInfo.save();

    return res.status(201).json({ message: "Organization info added successfully" });
  } catch (error) {
    console.error("Error adding vendor org info:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const addOrganizationDetails = async (req, res) => {
  try {
    const {
      ReforganizationId,
      food,
      light,
      dj,
      manforce,
      customFields
    } = req.body;
     console.log(ReforganizationId,food,light,dj,manforce,customFields)
    if (!ReforganizationId) {
      return res.status(400).json({ message: "Organization ID is required" });
    }

    const newDetails = new OrganizationDetails({
      ReforganizationId,
      food,
      light,
      dj,
      manforce,
      customFields
    });

    await newDetails.save();

    return res.status(201).json({ message: "Organization service details added successfully" });
  } catch (error) {
    console.error("Error adding organization details:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  vendorsOrganizationInfo,
  addOrganizationDetails
};