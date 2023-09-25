var Brevo = require("@getbrevo/brevo");
var defaultClient = Brevo.ApiClient.instance;

require('dotenv').config();

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = process.env.SENDINBLUE_API_KEY;
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new Brevo.TransactionalEmailsApi();

var sendSmtpEmail = {
  sender: {
    name: 'NSe Sendinblue Test',
    email: 'christian@technologist.ai',
  },
  to: [{
    name: 'Christian',
    email: 'nonexistinguser@technologist.ai',
  }],
  subject: 'Test From Sendinblue Integration',
  htmlContent: '<h1>Hello from Sendinblue Integration</h1>',
}; // SendSmtpEmail | Values to send a transactional email

apiInstance.sendTransacEmail(sendSmtpEmail).then(
  function (data) {
    console.log("API called successfully. Returned data: " + data);
  },
  function (error) {
    console.error(error);
  }
);
