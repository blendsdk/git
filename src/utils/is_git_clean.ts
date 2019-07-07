import { is_git_clean } from "../Git";
import chalk from "chalk";


if (is_git_clean()) {
    console.log(`${chalk.red("ERROR")}: ${process.cwd()} is not clean!`);
    process.exit(1)
} else {
    process.exit(0);
}