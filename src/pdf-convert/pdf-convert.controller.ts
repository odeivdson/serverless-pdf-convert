import { Controller, Post, Body } from '@nestjs/common';
import { DocToPdfDto } from './dto/doc-to-pdf.dto';
import { DocPdfResponseModel } from './model/doc-pdf-response.model';

import { PdfConvertService } from './pdf-convert.service';

@Controller('pdf')
export class PdfConvertController {
  constructor(private readonly pdfConvertService: PdfConvertService) {}

  @Post('doc-to-pdf')
  docToPdf(@Body() doc: DocToPdfDto): Promise<DocPdfResponseModel> {
    return this.pdfConvertService.docToPdf(doc);
  }
}
