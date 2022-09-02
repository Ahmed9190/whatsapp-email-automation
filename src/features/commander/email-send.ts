import { Arguments } from "yargs";
import { envKeys } from "../../core/constants/env.constants";
import { EncryptionHandler } from "../../core/handlers/encryption.handler";
import { EnvFileHandler } from "../../core/handlers/env-file.handler";
import { Email } from "../email/email";
import { TransporterOptions, EmailHosts } from "../email/transporter-options";
import { Command } from "./command";
import { Commander, CommanderOptions } from "./commander";

interface IEmailOptions extends CommanderOptions {
  host: EmailHosts;
  to: string;
  file_path: string;
}

class EmailCommander extends Commander {
  constructor() {
    super([
      new Command("email_send", false),
      new Command("to", true),
      new Command("text", true),
      new Command("subject", true),
      new Command("file_path", true),
    ]);
  }

  async handler(argv: Arguments<IEmailOptions>): Promise<void> {
    const { to, file_path, text, subject }: IEmailOptions = argv;

    const emailService = EnvFileHandler.getEnvValue(
      envKeys.EMAIL_SERVICE
    ) as EmailHosts;

    const email = EnvFileHandler.getEnvValue(envKeys.EMAIL);
    const encryptedPassword = EnvFileHandler.getEnvValue(envKeys.PASSWORD);

    if (emailService == null)
      throw Error("Can't retrieve EMAIL_SERVICE from .env");
    if (email == null) throw Error("Can't retrieve EMAIL from .env");
    if (encryptedPassword == null)
      throw Error("Can't retrieve PASSWORD from .env");

    const encryptor: EncryptionHandler = new EncryptionHandler();

    const decryptedPassword: string = encryptor.decrypt(encryptedPassword!);

    const transporterOptions = TransporterOptions[emailService](
      email,
      decryptedPassword
    );

    const mailer: Email = new Email(transporterOptions);
    mailer.sendAttachment({
      to,
      subject,
      text,
      attachments: [{ path: file_path }],
    });
  }
}

export const { builder, command, handler } = new EmailCommander().build;
