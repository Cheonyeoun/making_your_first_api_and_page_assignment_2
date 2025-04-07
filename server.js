// Boilerplate Code for HTTP Status Code API
const express = require('express');
const { stat } = require('fs');
const app = express();
app.use(express.json());

app.get('/',(req,res)=>{
  return res.send({message:"Hye There Welcome To The Server!"})
})

app.get('/status-info', async(req,res)=>{
  
  const status = req.query.code;

  let Response =   {
    "status": "listening",
    "message": "Response"
  }

  if (status === '200') {
    Response = {
      status: 200,
      message: "OK: The request has succeeded. The meaning of this status depends on the HTTP method used."
    };
  } else if (status === '201') {
    Response = {
      status: 201,
      message: "Created: The request has succeeded and a new resource has been created as a result."
    };
  } else if (status === '204') {
    Response = {
      status: 204,
      message: "No Content: The server successfully processed the request and is not returning any content."
    };
  } else if (status === '400') {
    Response = {
      status: 400,
      message: "Bad Request: The server cannot process the request due to client-side errors (e.g., malformed syntax)."
    };
  } else if (status === '401') {
    Response = {
      status: 401,
      message: "Unauthorized: Authentication is required and has failed or has not yet been provided."
    };
  } else if (status === '403') {
    Response = {
      status: 403,
      message: "Forbidden: The request was valid, but the server is refusing action."
    };
  } else if (status === '404') {
    Response = {
      status: 404,
      message: "Not Found: The server has not found anything matching the request URI. This is often caused by a missing page or resource."
    };
  } else if (status === '405') {
    Response = {
      status: 405,
      message: "Method Not Allowed: The method specified is not allowed for the resource."
    };
  } else if (status === '429') {
    Response = {
      status: 429,
      message: "Too Many Requests: The user has sent too many requests in a given amount of time."
    };
  } else if (status === '500') {
    Response = {
      status: 500,
      message: "Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request."
    };
  } else if (status === '502') {
    Response = {
      status: 502,
      message: "Bad Gateway: The server received an invalid response from the upstream server."
    };
  } else if (status === '503') {
    Response = {
      status: 503,
      message: "Service Unavailable: The server is not ready to handle the request."
    };
  } else if (status === '504') {
    Response = {
      status: 504,
      message: "Gateway Timeout: The server didn't get a response in time from another server."
    };
  }else {
    Response = {
      status: 400,
      message: "Invalid status code provided. Please use a supported HTTP status code."
    };
  } 

  return res.json({Response});
})


app.get('/assistant/greet/',async(req,res)=>{

  try{
  const name = req.query.name;  
  if(!name){

    return res.status(400).json({
      status:400,
      message:"Bad Request: Name is required!"
    })    
  }
  const welcomeMessage = `Hello, ${name}! Welcome to our assistant app!`

  return res.json({
    status:200,
    welcomeMessage
  });

}
catch(error){
  return res.status().send({error:"Error Smtg has occured!!"})
}

})


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Status Code API is running on http://localhost:${PORT}`);
});

