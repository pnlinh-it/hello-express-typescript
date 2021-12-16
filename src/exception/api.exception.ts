export class ApiException extends Error {
  constructor(public status: number, message?: string) {
    super(message);
    Object.setPrototypeOf(this, ApiException.prototype);
  }
}
