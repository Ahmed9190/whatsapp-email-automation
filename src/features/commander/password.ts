import { Arguments } from "yargs";
import { envKeys } from "../../core/constants/env.constants";
import { EncryptionHandler } from "../../core/handlers/encryption.handler";
import { EnvFileHandler } from "../../core/handlers/env-file.handler";
import { Command } from "./command";
import { Commander, CommanderOptions } from "./commander";

class PasswordCommander extends Commander {
  constructor() {
    super([new Command("password", true)]);
  }

  async handler(argv: Arguments<CommanderOptions>): Promise<void> {
    const { password } = argv;

    const encryptionHandler = new EncryptionHandler();
    const encryptedPassword = encryptionHandler.encrypt(password);

    EnvFileHandler.setEnvValue(envKeys.PASSWORD, encryptedPassword);

    process.stdout.write("Password updated successfully");
    process.exit(0);
  }
}

const passwordCommander = new PasswordCommander();

export const { builder, command, handler } = passwordCommander.build;
