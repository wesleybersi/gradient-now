#!/usr/bin/env node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import * as chroma from "chroma-js";
import chalk from "chalk";

interface GradientRequest {
  colors: string[];
  steps: number;
  options: { list: boolean };
}

function parseArguments(): GradientRequest | undefined {
  const argv = yargs(hideBin(process.argv))
    .usage("Usage: $0 <colors...> <steps> [--list]")
    .demandCommand(
      3,
      "Please provide at least 3 arguments: 2 colors and the amount of steps in the gradient."
    )
    .option("list", {
      alias: "l",
      description: "Include to return an array of string values.",
      type: "boolean",
      default: false,
    })
    .strict()
    .parseSync();

  const steps = argv._.pop();
  const colors = argv._ as string[];
  if (typeof steps !== "number") {
    console.error(`${steps} is not a valid number`);
    return;
  }

  for (const color of colors) {
    if (!chroma.valid(color)) {
      console.error(`${color} is not a valid color`);
      return;
    }
  }

  return {
    colors,
    steps,
    options: { list: argv.list ? true : false },
  };
}

function generateGradient(request: GradientRequest): string[] {
  return chroma.scale(request.colors).colors(request.steps);
}

const request = parseArguments();
if (request) {
  const gradient = generateGradient(request);

  if (request.options.list) {
    console.log(gradient);
  } else {
    const chalked = [];
    for (const color of gradient) {
      // Check if color is a valid hexadecimal code before applying chalk styles
      const isValidColor = /^#([0-9A-F]{3}){1,2}$/i.test(color);

      if (isValidColor) {
        chalked.push(chalk.hex(color).bold(color));
      } else {
        // Handle invalid color codes here
        chalked.push(chalk.red.bold("Invalid Color"));
      }
    }
    // Strip escape sequences from chalked strings

    console.log(chalked.join(" "));
  }
}
