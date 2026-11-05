import test from "node:test";
import assert from "node:assert/strict";

import { DEFAULT_MAX_SPANS, clampSpanCount, getRandomColor } from "./utils.js";

test("clampSpanCount clamps invalid and out-of-range values", () => {
  assert.equal(clampSpanCount("-10"), 0);
  assert.equal(clampSpanCount("foo"), 0);
  assert.equal(clampSpanCount(String(DEFAULT_MAX_SPANS + 1)), DEFAULT_MAX_SPANS);
});

test("clampSpanCount keeps valid values", () => {
  assert.equal(clampSpanCount("0"), 0);
  assert.equal(clampSpanCount("37"), 37);
});

test("getRandomColor always returns an item from the palette", () => {
  const colors = ["red", "green", "blue"];

  for (let i = 0; i < 200; i += 1) {
    assert.ok(colors.includes(getRandomColor(colors)));
  }
});
