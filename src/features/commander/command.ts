export class Command {
  public name: string;
  public withValue: boolean;

  constructor(name: string, withValue: boolean) {
    this.name = name;
    this.withValue = withValue;
  }

  toString(): string {
    if (!this.withValue) return `${this.name}`;
    else return `${this.name} <${this.name}>`;
  }
}
