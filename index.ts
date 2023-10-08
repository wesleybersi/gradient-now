#!/usr/bin/env node

import * as chroma from "chroma-js";
import chalk from "chalk";

interface GradientRequest {
  colors: string[];
  steps: number;
}

function parseArguments(): GradientRequest | undefined {
  const colors: string[] = process.argv.slice(2, process.argv.length - 1);
  const chalked: string[] = [];
  const steps = process.argv[process.argv.length - 1];

  if (Number.isNaN(parseInt(steps))) {
    console.error(`${steps} is not a valid number`);
    return;
  }
  for (const color of colors) {
    if (!chroma.valid(color)) {
      console.error(`${color} is not a valid color`);
      return;
    }
  }

  // console.log(chalk.hex("#DEADED")("text"));

  return { colors, steps: parseInt(steps) };
}

function generateGradient(request: GradientRequest): string[] {
  return chroma.scale(request.colors).colors(request.steps);
}

const request = parseArguments();
if (request) {
  console.log(generateGradient(request));
}
