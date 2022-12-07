const express = require('express'); 
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const serverless = require('serverless-http');
const cors = require('cors')
require('dotenv').config()
const adminRouter = require('./src/routers/admin_router')
const userRouter = require('./src/routers/user_router');
const policyRouter = require('./src/routers/policy');
const termsRouter = require('./src/routers/terms')
const contatRouter = require('./src/routers/contact');
const kycRouter = require('./src/routers/kyc_router')
const walletRouter = require('./src/routers/wallet');
const referRouter = require('./src/routers/referEarn_router');
const tleRouter = require('./src/routers/tle_router');
const eventRouter = require('./src/routers/event_router');
const landRouter = require('./src/routers/land_router');
const offerRouter = require('./src/routers/offers_router');




const app = express();
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/Images', express.static('./Images'));

console.log(new AWS.SharedIniFileCredentials({ profile: "techland" }));



app.get('/', (req,res) => {
    res.send({mesage : "Started "});
})

app.use('/api/v1/', userRouter);
app.use('/api/v1/', policyRouter);
app.use('/api/v1/',termsRouter);
app.use('/api/v1/', contatRouter);
app.use('/api/v1/', kycRouter);
app.use('/api/v1/', walletRouter);
app.use('/api/v1/', referRouter);
app.use('/api/v1/', adminRouter);
app.use('/api/v1/', tleRouter);
app.use('/api/v1/', eventRouter);
app.use('/api/v1/', landRouter);
app.use('/api/v1/', offerRouter);




mongoose.connect('mongodb+srv://Node2flyweis:node2@cluster0.sj8ekro.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB is connected ");
}
) 




app.listen(process.env.PORT || 3001, () => {
    console.log("server is running on port 3001");
})


module.exports = {
    handler: serverless(app)
}