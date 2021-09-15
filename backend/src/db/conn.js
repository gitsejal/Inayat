const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/InayatRegistration",
{
    useNewUrlParser:true,
    useUnifiefTopology:true,
    useCreateIndex:true
}).then(() => {
    console.log('connection successful');
}).catch((e) => {
    console.log('server not connected');
})