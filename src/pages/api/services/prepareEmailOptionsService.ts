// Nodemailer
import nodemailer, {
  SendMailOptions,
  Transporter,
  SentMessageInfo
} from 'nodemailer';
// Interfaces
import { EmailSetUpOptions } from '@/interfaces';
// Utils
import { logger } from '@/utils';


/**
 * prepareEmailOptionsService
 * 
 * Este servicio prepara las opciones necesarias para enviar un correo electrónico. Crea un transportador
 * de correo utilizando la configuración proporcionada en las variables de entorno y define las opciones
 * del correo electrónico (como el destinatario, el asunto y el contenido HTML).
 * 
 * @param {string} subject - El asunto del correo electrónico.
 * @param {string} template - El contenido HTML del correo electrónico.
 * @param {string} emailAddress - La dirección de correo electrónico del remitente.
 * @returns {Promise<EmailSetUpOptions | boolean>} - Una promesa que se resuelve con un objeto que contiene
 *          las opciones del correo y el transportador, o false en caso de error.
 */
const prepareEmailOptionsService = async (
  subject: string,
  template: string,
  emailAddress: string
): Promise<EmailSetUpOptions | boolean> => {
  try {
    let transporter: Transporter<SentMessageInfo> = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number( process.env.EMAIL_PORT ),
      secure: true,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    let mailOptions: SendMailOptions = {
      from: emailAddress,
      to: process.env.EMAIL_USERNAME,
      subject: `Asunto: ${ subject }`,
      html: template
    }

    return {
      mailOptions,
      transporter
    };

  } catch ( error ) {
    logger.consoleErrorsHandler( error, 'prepareEmailOptionsService' );

    return false;
  }
}

export default prepareEmailOptionsService;
