export class noteAdapter {
  constructor(user) {
    this.user = user;
  }
  getName() {
    return this.user.firstName + " " + this.user.lastName;
  }
}
