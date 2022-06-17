export class ErrorMessage {
  static extractErrorMessage(error: any): string {
    const messageError = error.message;

    return messageError;
  }
}