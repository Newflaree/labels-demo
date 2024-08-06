// Node
import fs from 'fs';
import path from 'path';
// Next
import { NextApiRequest } from 'next';
// Interfaces
import {
  EmailOptions,
  EmailRequestBody
} from '@/interfaces';
// Utils
import { logger } from '@/utils';


/**
 * setUpEmailTemplateService
 * 
 * Este servicio configura una plantilla de correo electrónico utilizando los datos proporcionados en la solicitud.
 * La función lee un archivo de plantilla HTML desde el sistema de archivos, reemplaza los marcadores de posición 
 * con los datos del cuerpo de la solicitud, y devuelve la plantilla completa.
 * 
 * @param {NextApiRequest} req - El objeto de solicitud HTTP de Next.js que contiene el cuerpo de la solicitud.
 * @returns {Promise<EmailOptions | boolean>} - Una promesa que se resuelve con un objeto que contiene la plantilla 
 *          de correo electrónico con los datos reemplazados, o `false` en caso de error.
 */
const setUpEmailTemplateService = async (
  req: NextApiRequest
): Promise<EmailOptions | boolean> => {
  const {
    name,
    lastName,
    emailAddress,
    subject,
    message
  } = req.body as EmailRequestBody;

  try {
    const templatePath = path.join( process.cwd(), 'email', 'emailTemplate.html' );

    let template = fs.readFileSync( templatePath, 'utf8' );
    template = template.replace( '{{name}}', name )
      .replace( '{{lastName}}', lastName )
      .replace( '{{emailAddress}}', emailAddress )
      .replace( '{{subject}}', subject )
      .replace( '{{message}}', message )

      return {
        template
      }

  } catch ( error ) {
    logger.consoleErrorsHandler( error, 'setUpEmailTemplateService' );

    return false;
  }
}

export default setUpEmailTemplateService;
