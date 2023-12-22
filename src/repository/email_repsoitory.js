const { NotificationTicket } = require('../models/index');
const { Op } = require("sequelize");

class EmailRepository{
   
    async createMail(data){
        try {
            const response = await NotificationTicket.create(data);
            return response;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            console.log(error);
            throw error;
        }
    }

    async findMail(){

    }

    async updateMailStatus(){

    }
}

module.exports = EmailRepository;