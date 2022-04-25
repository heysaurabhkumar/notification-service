const clientTwilio = require("../config/twillio");

const sendSMS = async (to) => {
  clientTwilio.messages
    .create({
      messagingServiceSid: "MG0b205057f6c5053e8dbda253fc310dd6",
      to,
      body: "Test message from Notification API using Twilio",
    })
    .then((message) => console.log(message.sid))
    .done(console.log("SMS sent successfully"));
};

module.exports = {
  sendSMS,
};
