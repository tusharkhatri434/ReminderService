const sender = require("../utils/email_config")

const sendBasicEmail = async (mailFrom, mailTo, mailSubject, mailBody) => {
  try {
    const response = await sender.sendMail({
      from: mailFrom,
      to: mailTo,
      subject: mailSubject,
      text: mailBody,
      html:"<h1>Hello i am tusharkhatri1001</h1>"
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  sendBasicEmail,
};
