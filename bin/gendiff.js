#!/usr/bin/env node
import { program } from 'commander';
import pkg from '../package.json' with { type: 'json' };

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .argument('<filepath1>', 'path to first file')  
  .argument('<filepath2>', 'path to second file') 
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2, options) => {
    const diff = genDiff(filepath1, filepath2, options.format);
    console.log(diff);
  });

program.parse();