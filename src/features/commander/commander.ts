import { Arguments, CommandBuilder } from "yargs";
import { Command } from "./command";

export interface CommanderOptions {
  [value: string]: string;
}

export abstract class Commander {
  static dir = __dirname;

  private readonly commands: string;

  constructor(commands: Command[]) {
    this.commands = commands
      .map<string>((command: Command) => command.toString())
      .join(" ");
  }

  private builder(
    yargs: any
  ): CommandBuilder<CommanderOptions, CommanderOptions> {
    return yargs.options({
      upper: { type: "boolean" },
    });
  }

  abstract handler(argv: Arguments<CommanderOptions>): Promise<void>;

  public get build() {
    return {
      builder: this.builder,
      handler: this.handler,
      command: this.commands,
    };
  }
}
