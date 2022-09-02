#!/usr/bin/env node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { Commander } from "./features/commander/commander";

yargs(hideBin(process.argv))
  .commandDir(Commander.dir)
  .strict()
  .alias({ h: "help" }).argv;
