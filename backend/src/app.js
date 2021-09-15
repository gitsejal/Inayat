const express = require("express");
const app= express();
require("./db/conn");

const port = process.env.port || 3000;
app.get("/",(req,ress) => {
    ress.send("Inayat")
});

app.listen(port,()=> 
    console.log('server is listening on port ' +port)
)
/*var app = express();

// sets port 8080 to default or unless otherwise specified in the environment
app.set('port', process.env.PORT || 8080);

app.get('/', function(req, res){
    res.send('hello world');
});

// Only works on 3000 regardless of what I set environment port to or how I set
// [value] in app.set('port', [value]).
// app.listen(3000);
app.listen(app.get('port'));*/