// log provides a wrapper for console.log that prefixes '[libkernel]' to the
// output.
function log(...inputs) {
    console.log("[libkernel]", ...inputs);
}
// logErr provides a wrapper for console.error that prefixes '[libkernel]' to
// the output.
function logErr(...inputs) {
    console.error("[libkernel]", ...inputs);
}
export { log, logErr };
