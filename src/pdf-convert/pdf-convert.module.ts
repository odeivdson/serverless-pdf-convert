import { Module } from '@nestjs/common';
import { PdfConvertService } from './pdf-convert.service';
import { PdfConvertController } from './pdf-convert.controller';
import { LibreofficeModule } from '../../libs/libreoffice/src';

@Module({
  imports: [LibreofficeModule],
  controllers: [PdfConvertController],
  providers: [PdfConvertService]
})
export class PdfConvertModule {}
