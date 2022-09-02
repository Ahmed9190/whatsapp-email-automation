import { Arguments } from "yargs";
import { envKeys } from "../../core/constants/env.constants";
import { EnvFileHandler } from "../../core/handlers/env-file.handler";
import { Command } from "./command";
import { Commander, CommanderOptions } from "./commander";

class EmailHostCommander extends Commander {
  constructor() {
    super([new Command("email_host_set", false), new Command("host", true)]);
  }

  async handler(argv: Arguments<CommanderOptions>): Promise<void> {
    const { host } = argv;

    EnvFileHandler.setEnvValue(envKeys.EMAIL_SERVICE, host);
    process.stdout.write(`Email host set ${host} successfully`);
    process.exit(0);
  }
}

const emailCommander = new EmailHostCommander();

export const { builder, command, handler } = emailCommander.build;
