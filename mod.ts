import { v4 } from "./deps.ts";

export function greet(thing?: string) {
  console.log(`Hello ${thing ?? "World"}! (${v4.generate()})`);
}
