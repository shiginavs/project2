export class MessageFormModel{
  constructor(
    public email: string,
    public name: string,
    public message: string,
    public id?: number
  ) {
  }
}
