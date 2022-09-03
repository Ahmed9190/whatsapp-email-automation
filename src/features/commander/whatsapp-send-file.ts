import { Arguments } from "yargs";
import Browser from "../../core/browser/browser";
import Whatsapp from "../whatsapp/whatsapp";
import { Command } from "./command";
import { Commander, CommanderOptions } from "./commander";

class WhatsappSendFileCommander extends Commander {
  constructor() {
    super([
      new Command("whatsapp_send_file", false),
      new Command("number", true),
      new Command("file_path", true),
    ]);
  }

  async handler(argv: Arguments<CommanderOptions>): Promise<void> {
    await Browser.open({ withSession: true });

    const { number, file_path } = argv;
    const whatsapp: Whatsapp = new Whatsapp();

    await whatsapp.sendFile(number, file_path);

    await Browser.close();
    process.stdout.write(`Sent`);
  }
}
const whatsappSendFileCommander = new WhatsappSendFileCommander();
export const { builder, command, handler } = whatsappSendFileCommander.build;
