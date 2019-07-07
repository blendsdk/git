#!/usr/bin/env node
import { get_current_branch } from "../Git";
import chalk from "chalk";

const branch = process.argv[2] || 'master'
const curBranch = get_current_branch();

if (branch !== curBranch) {
    console.log(`${chalk.red("ERROR")}: Not on ${branch} branch!`);
    process.exit(1)
} else {
    process.exit(0);
}