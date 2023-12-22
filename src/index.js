const bodyParser = require('body-parser');
const express = require('express');
const {PORT} = require("./config/server_config");
const { sendBasicEmail } = require("./services/email-service");
const {create} = require("./controllers/email-controller");

function setUpServer(){
  
     const app = express();

     app.use(bodyParser.json());
     app.use(bodyParser.urlencoded({extended:true}));
      
     app.post('/mail',create);

     app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
      

        // sendBasicEmail(
        //   "support@admin.com",
        //   "tusharkhatri1001@gmail.com , tusharkhatri8193@gmail.com",
        //   "This is a testing email",
        //   "Hey, how are you, I hope you like the support"
        // );
        
     });

}
setUpServer();