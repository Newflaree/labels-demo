// Next
import {
  NextApiRequest,
  NextApiResponse
} from 'next';
// Controllers
import { sendEmailController } from './controllers';
// Utils
import {
  messages,
  statusCodes
} from '@/utils';


/**
 * Handler para la API de envío de correos electrónicos.
 * 
 * Este manejador gestiona las solicitudes HTTP entrantes. Solo se permiten solicitudes POST para enviar correos electrónicos.
 * Si se recibe un método diferente a POST, responde con un error 400.
 * 
 * @param {NextApiRequest} req - El objeto de solicitud HTTP de Next.js.
 * @param {NextApiResponse} res - El objeto de respuesta HTTP de Next.js.
 * @returns {Promise<void> | void} - Devuelve una promesa si el método es POST y llama al controlador para manejar el correo electrónico. 
 *          Devuelve void en caso de que el método no sea POST, respondiendo con un error 400.
 */
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> | void {
  switch ( req.method ) {
    case 'POST':
      return sendEmailController( req, res );
  
    default:
      return res.status( statusCodes.BAD_REQUEST ).json({
        ok: false,
        message: messages.ENDPOINT_ERROR
      });
  }
}
