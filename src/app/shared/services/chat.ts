export class Chat {
  key?: string | null;
  message?: string;
  username?: string;

  constructor(message: string, username: string) {
    this.message = message;
    this.username = username;
  }
}
