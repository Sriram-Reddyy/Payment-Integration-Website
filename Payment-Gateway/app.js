const RazorPay = require("razorpay");
const express = require("express");

const razorPayInstance = new RazorPay({
    key_id : "rzp_test_EKJfS1OlITnQEZ",
    key_secret : "liSM3LdSagOPi5TgVpGwy54B"
})

const app = express();
app.use(express.json());
app.post("/createOrder",(req,res)=>{
    console.log(req.body);
    var {amount, currency, receipt, notes} = req.body;
    razorPayInstance.orders.create({amount, currency, receipt, notes}).then((order)=>{
        console.log(order);
        res.json(order);
    }).catch((err)=>{
        res.send(err);
    })
})
app.get("/get",(req,res)=>{
    res.send({});
})
app.use((req,res)=>{
    res.status(404).send("No Such Path");
})
app.listen(3000,()=>{
    console.log("Server is running on port : 3000");
})