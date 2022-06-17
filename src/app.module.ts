import { Module } from '@nestjs/common';
import { PdfConvertModule } from './pdf-convert/pdf-convert.module';

@Module({
  imports: [PdfConvertModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
