import { Logger } from "@nestjs/common";
import { execSync } from 'child_process';
import { ErrorMessage } from "src/shared/utils/errorMessage.util";

const fs = require( 'fs' );
const util = require( 'util' )
const writeFilePromisified = util.promisify( fs.writeFile )
const lambdafs = require( 'lambdafs' );


export class LibreOfficeConvertService {
  logger = new Logger(LibreOfficeConvertService.name);

  async convertDocToPdf(docBase64: string) {
    try {      
      const docxBuffer = Buffer.from(docBase64, 'base64');

      const result = await this.convert(docxBuffer);

      const docBase64Converted = result.toString('base64');

      return docBase64Converted;

    } catch (error) {
     this.handleError('convertDocToPdf', error)
    }
  }

  private async convert(fileBuffer: Buffer): Promise<Buffer> {
    try {
      const outputPath = '/tmp/';
      const dateNow = ( new Date() ).getTime();
      const fileName = `${dateNow}`;
      const dirName = `/tmp/dir-${fileName}`;

      execSync( 'export HOME=/tmp' )
      
      const inputPath = '/opt/lo.tar.br';

      await lambdafs.inflate( inputPath )

      await writeFilePromisified( `${outputPath}${fileName}.docx`, fileBuffer );

      const convertCommand = `/tmp/lo/instdir/program/soffice.bin --headless --norestore --invisible --nodefault --nofirststartwizard --nolockcheck --nologo --convert-to "pdf:writer_pdf_Export" --outdir ${dirName} /tmp/${fileName}.docx`;

      try {
        console.log( execSync( convertCommand ).toString( 'utf8' ) );
      } catch ( e ) {
        console.log( execSync( convertCommand ).toString( 'utf8' ) );
      }

      
      const filePdfBuffer = fs.readFileSync( `${dirName}/${fileName}.pdf` );
      
      execSync( `rm -rf ${dirName} ${fileName}.docx` )

      return filePdfBuffer;
    } catch(error) {
      this.handleError('convert',error)
    }
  }  

  private handleError(method: string, error: any) {
    const errorMessage = ErrorMessage.extractErrorMessage(error);
    this.logger.error({method: method, message: errorMessage})
    console.log(error)
  }
}