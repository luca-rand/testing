import {
  assert,
  assertEquals,
} from "https://deno.land/std@0.64.0/testing/asserts.ts";

Deno.test({
  name: "hello world",
  fn() {
    assert(true);
    assertEquals("HELLO WORLD".toLowerCase(), "hello world");
  },
});
