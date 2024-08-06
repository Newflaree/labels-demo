// Express
import { NextApiRequest } from 'next';
// Service
import {
  prepareEmailOptionsService,
  sendEmailService,
  setUpEmailTemplateService
} from '../services';
// Interfaces
import {
  EmailTemplate,
  EmailSetUpOptions,
  SendEmailResponse
} from '@/interfaces';
// Utils
import {
  logger,
  statusCodes
} from '@/utils';


/**
 * sendEmailModule
 * 
 * PATH: /api/contact
 * 
 * Este módulo orquesta el proceso de envío de un correo electrónico. Recibe la solicitud HTTP,
 * llama a los servicios necesarios para preparar el template y las opciones del correo, y luego
 * envía el correo utilizando el servicio adecuado.
 * 
 * @param {NextApiRequest} req - El objeto de solicitud HTTP que contiene los datos necesarios para el envío del correo.
 * @returns {Promise<SendEmailResponse | any>} - Una promesa que se resuelve con una respuesta que indica el resultado del proceso de envío del correo.
 */
const sendEmailModule = async (
  req: NextApiRequest
): Promise<SendEmailResponse | any> => {
  const {
    emailAddress,
    subject
  } = req.body;

  const emailTemplateResult = await setUpEmailTemplateService( req );
  if ( !emailTemplateResult || typeof emailTemplateResult === 'boolean' ) return {
    ok: false,
    statusCode: statusCodes.BAD_REQUEST,
    message: 'Error'
  }

  const { template } = emailTemplateResult as EmailTemplate;

  const emailOptionsResult = await prepareEmailOptionsService(
    subject,
    template,
    emailAddress
  );
  if ( !emailOptionsResult || typeof emailOptionsResult === 'boolean' ) return {
    ok: false,
    statusCode: statusCodes.BAD_REQUEST,
    message: 'Error'
  }

  const {
    mailOptions,
    transporter
  } = emailOptionsResult as EmailSetUpOptions;

  try {
    const sendEmailResult = await sendEmailService( mailOptions, transporter );
    if ( !sendEmailResult ) return {
      ok: false,
      statusCode: statusCodes.BAD_REQUEST,
      message: 'Error'
    }

    return sendEmailResult;

  } catch ( error ) {
    logger.consoleErrorsHandler( error, 'sendEmailModule' );

    return {
      ok: false,
      statusCode: statusCodes.BAD_REQUEST,
      message: error
    }
  }
}

export default sendEmailModule;
