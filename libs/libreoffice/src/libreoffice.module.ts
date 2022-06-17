import { Module } from '@nestjs/common';
import { LibreofficeService } from './libreoffice.service';

@Module({
  providers: [LibreofficeService],
  exports: [LibreofficeService],
})
export class LibreofficeModule {}
