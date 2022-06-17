export class DocToPdfDto {
  contentBase64: string;
  varsToProcess: {
    nome: string;
    dataNascimento: string;
  }
}
