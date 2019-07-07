import * as shell from "shelljs";
/**
 * Gets the current working directory
 *
 * @returns {string}
 */
function get_current_folder(): string {
    return process.cwd();
}

/**
 * Gets the current branch name
 *
 * @export
 * @param {string} [folder]
 * @returns {string}
 */
export function get_current_branch(folder?: string): string {
    const branch = shell.exec("git rev-parse --abbrev-ref HEAD", {
        silent: true,
        cwd: folder || get_current_folder()
    }).toString().trim();
    return branch;
}