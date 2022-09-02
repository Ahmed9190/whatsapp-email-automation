import { Arguments } from "yargs";
import Browser from "../../core/browser/browser";
import WhatsappHandler from "../whatsapp/whatsapp-handler";
import { Command } from "./command";
import { Commander, CommanderOptions } from "./commander";

class WhatsappOpenCommander extends Commander {
  constructor() {
    super([new Command("whatsapp_open", false)]);
  }

  async handler(argv: Arguments<CommanderOptions>): Promise<void> {
    await Browser.open({ withSession: true });

    const whatsappHandler = new WhatsappHandler();

    const page = await whatsappHandler.openWhatsapp();

    await page.waitForNavigation({ timeout: 0 });
  }
}
const whatsappCommander = new WhatsappOpenCommander();
export const { builder, command, handler } = whatsappCommander.build;
