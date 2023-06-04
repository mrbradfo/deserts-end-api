import schedule from "node-schedule";
import twilio from "twilio";
import nodemailer from "nodemailer";
import { sendEmailReminder, sendTxtReminder } from "../usecase/sendReminder";

const twilioClient = twilio("<your_twilio_account_sid>", "<your_twilio_auth_token>");
const transporter = nodemailer.createTransport({
  service: "<your_email_service_provider>",
  auth: {
    user: "<your_email_address>",
    pass: "<your_email_password>",
  },
});

type Volunteer = {
  name: string;
  phone: string;
  email: string;
  service: string;
};

const volunteer: Volunteer = {
  name: "John Doe",
  phone: "+1234567890",
  email: "",
  service: "Sunday Service",
};

const job = schedule.scheduleJob("0 9 * * 0", async () => {
  try {
    sendEmailReminder(volunteer.name, volunteer.email, volunteer.service);
    sendTxtReminder(volunteer.name, volunteer.phone, volunteer.service);
  } catch (err) {
    console.error(err);
  }
});

job.on("run", () => {
  console.log("Job is running");
});

job.on("canceled", () => {
  console.log("Job is canceled");
});

job.on("scheduled", () => {
  console.log("Job is scheduled");
});

job.on("failed", () => {
  console.log("Job is failed");
});
