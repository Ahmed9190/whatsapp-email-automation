import { Arguments } from "yargs";
import { envKeys } from "../../core/constants/env.constants";
import { EnvFileHandler } from "../../core/handlers/env-file.handler";
import { Command } from "./command";
import { Commander, CommanderOptions } from "./commander";

class EmailCommander extends Commander {
  constructor() {
    super([new Command("email", true)]);
  }

  async handler(argv: Arguments<CommanderOptions>): Promise<void> {
    const { email } = argv;

    EnvFileHandler.setEnvValue(envKeys.EMAIL, email);
    process.stdout.write(`${email} added successfully`);
    process.exit(0);
  }
}

const emailCommander = new EmailCommander();

export const { builder, command, handler } = emailCommander.build;
