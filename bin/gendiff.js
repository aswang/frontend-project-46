#!/usr/bin/env node
import { program } from 'commander';
import pkg from '../package.json' with { type: 'json' };

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version(pkg.version);

program.parse();