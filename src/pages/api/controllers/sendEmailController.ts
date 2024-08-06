// Next
import {
  NextApiRequest,
  NextApiResponse
} from 'next';
// Interfaces
import { SendEmailResponse } from '@/interfaces';
// Modules
import { sendEmailModule } from '../modules';
// Utils
import {
  logger,
  messages,
  statusCodes
} from '@/utils';


/**
 * sendEmailController
 * 
 * PATH: /api/contact
 * METHOD: POST
 * AUTH-REQUIRED: false
 * ADMIN-REQUIRED: false
 * 
 * Este controlador maneja el envío de un correo electrónico orquestando los servicios necesarios.
 * Recibe el objeto de solicitud, procesa el envío del correo electrónico a través del módulo sendEmailModule,
 * y devuelve la respuesta apropiada según el resultado.
 * 
 * @param {NextApiRequest} req - The HTTP request object.
 * @param {NextApiResponse} res - The HTTP response object.
 * @returns {Promise<void>} - The HTTP response with status and message.
 */
const sendEmailController = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    const {
      statusCode,
      ok,
      message
    }: SendEmailResponse = await sendEmailModule( req );

    res.status( statusCode ).json({
      ok,
      message
    });
  
  } catch ( error ) {
    logger.consoleErrorsHandler( error, 'sendEmailController' )

    res.status( statusCodes.SERVER_ERROR ).json({
      ok: false,
      message: messages.SERVER_ERROR
    });
  }
}

export default sendEmailController;
