const { default: axios } = require("axios");

const {
  SMS_SERVICE_RECEIVER,
  SMS_SERVICE_VERIFY_URL,
  SMS_SERVICE_TEMPLATE_ID,
  SMS_SERVICE_API_KEY,
} = process.env;

const sendSms = async ({ fullName, phoneNumber }) => {
  try {
    const headers = {
      "Content-Type": "application/json",
      ACCEPT: "text/plain",
      "X-API-KEY": SMS_SERVICE_API_KEY,
    };

    const body = {
      mobile: SMS_SERVICE_RECEIVER,
      templateId: SMS_SERVICE_TEMPLATE_ID,
      parameters: [
        {
          name: "F",
          value: fullName,
        },
        {
          name: "P",
          value: phoneNumber,
        },
      ],
    };

    await axios.post(SMS_SERVICE_VERIFY_URL, body, {
      headers,
    });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  sendSms,
};
