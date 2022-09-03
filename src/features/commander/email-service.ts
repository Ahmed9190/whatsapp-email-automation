import { Arguments } from "yargs";
import { envKeys } from "../../core/constants/env.constants";
import { EnvFileHandler } from "../../core/handlers/env-file.handler";
import { EmailService } from "../email/transporter-options";
import { Command } from "./command";
import { Commander, CommanderOptions } from "./commander";

class EmailServiceCommander extends Commander {
  constructor() {
    super([new Command("email_service", true)]);
  }

  async handler(argv: Arguments<CommanderOptions>): Promise<void> {
    const { email_service: emailService } = argv;

    const emailServiceLowerCase: EmailService =
      emailService.toLocaleLowerCase() as EmailService;

    EnvFileHandler.setEnvValue(envKeys.EMAIL_SERVICE, emailServiceLowerCase);
    process.stdout.write(
      `Email service has been set to ${emailService} successfully`
    );
    process.exit(0);
  }
}

const emailCommander = new EmailServiceCommander();

export const { builder, command, handler } = emailCommander.build;
