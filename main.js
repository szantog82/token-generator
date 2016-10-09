var jwt = require('json-web-token');
var crypto = require('crypto');
 
var payload = "blabla" /*{
  "iss": "my_issurer",
  "aud": "World",
  "iat": 1400062400223,
  "typ": "/online/transactionstatus/v2",
  "request": {
    "myTransactionId": "[myTransactionId]",
    "merchantTransactionId": "[merchantTransactionId]",
    "status": "SUCCESS"
  }
};*/
 
 
var secret = crypto.randomBytes(256);  
 
// encode 
jwt.encode(secret, payload, function (err, token) {
  if (err) {
    return console.error(err.name, err.message);
  } else {
    console.log(token);
 
    // decode 
    jwt.decode(secret, token, function (err_, decode) {
      if (err) {
        return console.error(err.name, err.message);
      } else {
        console.log(decode);
      }
    });
  }
});
