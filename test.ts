import {assertEquals} from "https://deno.land/std/testing/asserts.ts"
import tempDirectory from "./mod.ts"

Deno.test("main", () => {
	assertEquals(typeof tempDirectory, "string")
});
