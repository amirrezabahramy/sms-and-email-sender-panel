const { sendMail } = require("../services/email");
const { sendSms } = require("../services/sms");

/** @type {import("express").RequestHandler} */
const getDiscount = async (req, res) => {
  try {
    const { fullName, phoneNumber } = req.body;

    const errors = [];

    if (!fullName) {
      errors.push("Full name is required.");
    }

    if (!phoneNumber) {
      errors.push("Phone number is required.");
    }

    if (!/^9[0-9]\d{8}$/.test(phoneNumber)) {
      errors.push("Please fill in a valid phone number.");
    }

    if (errors.length > 0) {
      return res.status(400).json(errors);
    }

    await sendMail({ fullName, phoneNumber });
    await sendSms({ fullName, phoneNumber });

    res.status(201).json("Operation was successful.");
  } catch (error) {
    res.status(500).json("Operation failed.");
  }
};

module.exports = {
  getDiscount,
};
