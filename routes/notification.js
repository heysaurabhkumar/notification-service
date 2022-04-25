const express = require("express");
const router = express.Router();
const httpStatus = require("http-status");

const { notification } = require("../controllers");

router.get("/", (req, res) => {
  res.status(httpStatus.OK).json({
    success: true,
    message: "Welcome to the notification API",
  });
});

router.post("/send-instant-sms", notification.sendInstantSMS);
router.post("/send-instant-whatsapp", notification.sendInstantWhatsApp);
router.post("/send-schedule-sms/:minute", notification.sendSechduleSMS);
router.post(
  "/send-schedule-whatsapp/:minute",
  notification.sendSechduleWhatsApp
);

module.exports = router;
