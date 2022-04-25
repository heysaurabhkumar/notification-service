const clientTwilio = require("../config/twillio");

const sendWhatsApp = (to) => {
  clientTwilio.messages
    .create({
      body: "Test message from Notification API using Twilio",
      from: "whatsapp:+14155238886",
      to: `whatsapp:${to}`,
    })
    .then((message) => console.log(message.sid))
    .done(console.log("WhatsApp message sent successfully"));
};

module.exports = {
  sendWhatsApp,
};
