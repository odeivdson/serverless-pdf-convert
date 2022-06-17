import { LibreofficeService } from '../../libs/libreoffice/src';
import { Injectable, Logger } from '@nestjs/common';

import { DATA_TYPE_PDF, PDF_EXTENSION, TYPE_BASE64 } from '../shared/constants';

import { DocToPdfDto } from './dto/doc-to-pdf.dto';
import { DocPdfResponseModel } from './model/doc-pdf-response.model';


@Injectable()
export class PdfConvertService {
  constructor(private libreoffice: LibreofficeService){}
  logger = new Logger(PdfConvertService.name);
  
  async docToPdf(docDataContent: DocToPdfDto): Promise<DocPdfResponseModel> {
    try {
      
      const pdfBase64 = await this.libreoffice.convertDocToPdf(docDataContent.contentBase64);
      console.log('deu bom e converteu')
      return await this.prepareResponse(pdfBase64);
    } catch(error) {
      this.logger.error('docToPdf', error) 
    }
  }

  private async prepareResponse(base64: string): Promise<DocPdfResponseModel> {
    return new DocPdfResponseModel({
      type: TYPE_BASE64,
      content: base64,
      extension: PDF_EXTENSION,
      dataType: DATA_TYPE_PDF,
    });
  }
}
