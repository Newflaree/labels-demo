// Nodemailer
import {
  SendMailOptions,
  SentMessageInfo,
  Transporter
} from 'nodemailer';
// Interface
import { SendEmailResponse } from '@/interfaces';
// Utils
import {
  messages,
  logger,
  statusCodes
} from '@/utils';


/**
 * sendEmailService
 * 
 * Este servicio envía un correo electrónico utilizando el transportador y las opciones de correo proporcionadas.
 * La función intenta enviar el correo utilizando el transportador Nodemailer y devuelve una respuesta con el
 * resultado de la operación.
 * 
 * @param {SendMailOptions} mailOptions - Las opciones del correo electrónico, que incluyen el destinatario, el
 *          asunto, el contenido HTML, etc.
 * @param {Transporter<SentMessageInfo>} transporter - El transportador de correo Nodemailer utilizado para enviar el correo.
 * @returns {Promise<SendEmailResponse>} - Una promesa que se resuelve con un objeto que contiene el estado de la operación
 *          (código de estado, éxito y mensaje).
 */
const sendEmailService = async (
  mailOptions: SendMailOptions, 
  transporter: Transporter<SentMessageInfo>
): Promise<SendEmailResponse> => {
  try {
    await transporter.sendMail( mailOptions );

    return {
      statusCode: statusCodes.SUCCESS,
      ok: true,
      message: messages.SEND_SUCCESS
    }

  } catch ( error ) {
    logger.consoleErrorsHandler( error, 'sendEmailService' );

    return {
      statusCode: statusCodes.BAD_REQUEST,
      ok: false,
      message: messages.SEND_ERROR
    }
  }
}

export default sendEmailService;
