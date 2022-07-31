import { Err } from "libskynet";
declare function loginComplete(): Promise<void>;
declare function kernelLoaded(): Promise<Err>;
declare function logoutComplete(): Promise<void>;
declare function openAuthWindow(): void;
export { loginComplete, kernelLoaded, logoutComplete, openAuthWindow };
