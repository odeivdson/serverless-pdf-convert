export class DocPdfResponseModel {
  type: string;

  content: string;

  extension: string;

  dataType: string;

  constructor(data: any) {
    this.type = data.type;
    this.content = data.content;
    this.extension = data.extension;
    this.dataType = data.dataType;
  }
}

