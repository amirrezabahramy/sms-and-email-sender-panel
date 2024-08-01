const nodemailer = require("nodemailer");

const { NODEMAILER_USER, NODEMAILER_PASS, NODEMAILER_RECEIVER } = process.env;

const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: false,
  auth: {
    user: NODEMAILER_USER,
    pass: NODEMAILER_PASS,
  },
});

const sendMail = async ({ fullName, phoneNumber }) => {
  try {
    transporter.sendMail({
      from: NODEMAILER_USER,
      to: NODEMAILER_RECEIVER,
      subject: "اطلاعات کاربر برای کد تخفیف",
      html: `<div dir="rtl">
                <h4>کلینیک زیبایی دکتر فهیمه عابدی</h4>
                <p>نام کاربر: ${fullName}</p>
                <p>شماره تماس کاربر: ${phoneNumber}</p>
            </div>`,
    });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  sendMail,
};
