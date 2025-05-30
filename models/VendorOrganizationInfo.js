const mongoose = require("mongoose");
const User = require("../models/userSchema");

// Vendor can have multiple organizations
const vendorOrganizationInfoSchema = new mongoose.Schema({
  NameofOrganization: { type: String, required: true },
  BuinessEmail: { type: String, required: true, unique: true },
  OfficePhone: { type: String, required: true },
  OrganizationAddress: { type: String, required: true },
  RefuserID: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } 
});


const organizationDetailsSchema = new mongoose.Schema({
  ReforganizationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'VendorOrganizationInfo',
    required: true
  },
  food: {
    veg: [{ name: String, price: Number }],
    nonVeg: [{ name: String, price: Number }],
    drink: [{ name: String, price: Number }]
  },
  light: {
    stageLight: [{ name: String, price: Number }],
    decorationLight: [{ name: String, price: Number }]
  },
  dj: {
    isAvailable: { type: Boolean, required: true },
    cost: { type: Number }
  },
  manforce: {
    waiters: [{ role: String, cost: Number }],
    chefs: [{ role: String, cost: Number }],
    security: [{ role: String, cost: Number }],
    decorators: [{ role: String, cost: Number }]
  },
  customFields: {
    extra: [{ name: String }]
  }
});

const VendorOrganizationInfo = mongoose.model("VendorOrganizationInfo", vendorOrganizationInfoSchema);
const OrganizationDetails = mongoose.model("OrganizationDetails", organizationDetailsSchema);

module.exports = {
  VendorOrganizationInfo,
  OrganizationDetails
};
