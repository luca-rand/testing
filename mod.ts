export function greet(thing?: string) {
  console.log(`Hello ${thing ?? "World"}!`);
}
