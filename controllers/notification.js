const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");

const { smsService, whatsappService } = require("../services");

const contactList = require("../data/contactList");

const sendInstantSMS = catchAsync(async (req, res) => {
  contactList.forEach(async (contact) => {
    await smsService.sendSMS(contact.phone);
  });

  res.status(httpStatus.OK).json({
    success: true,
    message: "Instant SMS sent successfully",
  });
});

const sendInstantWhatsApp = catchAsync(async (req, res) => {
  contactList.map(async (contact) => {
    await whatsappService.sendWhatsApp(contact.phone);
  });

  res.status(httpStatus.OK).json({
    success: true,
    message: "Instant WhatsApp sent successfully",
  });
});

const sendSechduleSMS = catchAsync(async (req, res) => {
  const { minute } = req.params;

  setTimeout(() => {
    contactList.forEach(async (contact) => {
      await smsService.sendSMS(contact.phone);
    });
  }, 1000 * 60 * minute);

  res.status(httpStatus.OK).json({
    success: true,
    message: "SMS scheduled successfully",
  });
});

const sendSechduleWhatsApp = catchAsync(async (req, res) => {
  const { minute } = req.params;
  setTimeout(() => {
    contactList.map(async (contact) => {
      await whatsappService.sendWhatsApp(contact.phone);
    });
  }, 1000 * 60 * minute);

  res.status(httpStatus.OK).json({
    success: true,
    message: "WhatsApp scheduled successfully",
  });
});

module.exports = {
  sendInstantSMS,
  sendInstantWhatsApp,
  sendSechduleSMS,
  sendSechduleWhatsApp,
};
