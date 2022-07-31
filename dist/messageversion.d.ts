import { Err } from "libskynet";
declare function kernelVersion(): Promise<[string, string, Err]>;
export { kernelVersion };
