// Nodemailer
import {
  Transporter,
  SendMailOptions,
  SentMessageInfo
} from 'nodemailer';


export interface EmailRequestBody {
  name: string;
  lastName: string;
  emailAddress: string;
  subject: string;
  message: string;
}

export interface EmailOptions {
  template: string;
}

export interface EmailSetUpOptions {
  mailOptions: SendMailOptions;
  transporter: Transporter<SentMessageInfo>;
}

export interface SendEmailResponse {
  statusCode: number;
  ok: boolean;
  message: string;
}

export interface EmailTemplate {
  template: string;
}
