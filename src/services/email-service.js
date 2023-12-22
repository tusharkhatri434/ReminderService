const sender = require("../config/email_config")
const EmailRepository = require("../repository/email_repsoitory");
const emailRepository = new EmailRepository();

const createMail = async (data)=>{
     try {
        const response = await emailRepository.createMail(data);
        return response;
     } catch (error) {
        console.log("Something went Wrong in service layer");
        throw {error};
     }
}

const findMail = async ()=>{
  try {
    const response = await emailRepository.findPendingMail({status:"PENDING"});
    return response;
    // console.log(response);
  } catch (error) {
    console.log("something went wrong in service layer");
    throw error;
  }
}

const updateTicket = async (ticketId, data) => {
  try {
    const response = await emailRepository.update(ticketId, data);
    return response;
  } catch (error) {
    console.log(error);
  }
}

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
  createMail,
  sendBasicEmail,
  updateTicket,
  findMail,
};
