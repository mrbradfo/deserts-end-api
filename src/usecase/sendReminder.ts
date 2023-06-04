import schedule from "node-schedule";
import twilio from "twilio";
import nodemailer from "nodemailer";

const twilioClient = twilio("<your_twilio_account_sid>", "<your_twilio_auth_token>");

export const sendTxtReminder = (
  volunteerPhoneNumber: string,
  volunteerName: string,
  serviceDate: string
) => {
  // Send a text message reminder
  const textMessage = `Hello, ${volunteerName}! Just a reminder that you are scheduled to serve on ${serviceDate}. Please be prepared and arrive on time. Thank you!`;

  twilioClient.messages
    .create({
      body: textMessage,
      from: "<your_twilio_phone_number>",
      to: volunteerPhoneNumber,
    })
    .then((message) => {
      console.log("Text message reminder sent:", message.sid);
    })
    .catch((error) => {
      console.error("Failed to send text message reminder:", error);
    });
};

// Initialize Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "<your_email_service_provider>",
  auth: {
    user: "<your_email_address>",
    pass: "<your_email_password>",
  },
});
export const sendEmailReminder = (
  volunteerEmail: string,
  volunteerName: string,
  serviceDate: string
) => {
  // Send an email reminder
  const emailMessage = {
    from: "<your_email_address>",
    to: volunteerEmail,
    subject: "Service Reminder",
    text: `Hello, ${volunteerName}!\n\nJust a reminder that you are scheduled to serve on ${serviceDate}. Please be prepared and arrive on time. Thank you!\n`,
  };

  transporter.sendMail(emailMessage, (error, info) => {
    if (error) {
      console.error("Failed to send email reminder:", error);
    } else {
      console.log("Email reminder sent:", info.response);
    }
  });
};
