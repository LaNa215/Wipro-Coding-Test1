const express = require("express");
const bodyParser = require('body-parser');
var http = require("http");
var app = express();
var httpServer = http.createServer(app);
const PORT = 8080;


app.use(bodyParser.json({ limit: '10mb' }))

httpServer.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});



app.post('/test', function (req, res) {
    try{
    let REF_MSISDN = req.body.referenceData.REF_MSISDN;
    let REF_IMSI = req.body.referenceData.REF_IMSI;
    let REF_SERVPROFID = req.body.referenceData.REF_SERVPROFID;
    var originalMsg = JSON.stringify(req.body.payload);
    var updatedMsg = originalMsg.replace(/{REF_MSISDN}*/g,REF_MSISDN);
    updatedMsg = updatedMsg.replace(/{REF_IMSI}*/g,REF_IMSI)
    updatedMsg = updatedMsg.replace(/{REF_SERVPROFID}*/g,REF_SERVPROFID)
    sendResponse(res,updatedMsg,200)
   }
    catch(error){
        sendErrorResponse(res,"Internal Server Error",500)
    }
})
function sendResponse(res, result,status) {
  res.status(status)
    res.setHeader("content-type","application/json")
    res.end(result);
    res.shouldKeepAlive = false;
}

function sendErrorResponse(res,message,status){
    res.status(status)
    res.end(message)
    res.shouldKeepAlive = false;
}
