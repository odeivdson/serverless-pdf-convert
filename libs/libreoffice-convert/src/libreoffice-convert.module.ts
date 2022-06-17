import { Module } from '@nestjs/common';
import { LibreOfficeConvertService } from './libreoffice-convert.service';


@Module({
  controllers: [],
  providers: [LibreOfficeConvertService],
  exports: [LibreOfficeConvertService]
})
export class LibreOfficeConvertModule {}
