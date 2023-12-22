const { response } = require('express');
const { NotificationTicket } = require('../models/index');
const { Op } = require("sequelize");

class EmailRepository {
  async createMail(data) {
    try {
      const response = await NotificationTicket.create(data);
      return response;
    } catch (error) {
      console.log("Something went wrong in repository layer");
      console.log(error);
      throw error;
    }
  }

  async findPendingMail(filter) {
    try {
      const mail = await NotificationTicket.findAll({
        where: {
          status: filter.status,
          notification: {
            [Op.lte]: new Date(),
          },
        },
      });

      return mail;
    } catch (error) {
      console.log("Something went wrong in repository layer");
      throw error;
    }
  }

  async update(ticketId, data) {
    try {
      const ticket = await NotificationTicket.findByPk(ticketId);
      if (data.status) ticket.status = data.status;
      await ticket.save();
      return ticket;
    } catch (error) {
      throw error;
    }
  }
  
}

module.exports = EmailRepository;