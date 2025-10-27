import {
  mock as mockFn,
  describe as describeFn,
  it as itFn,
  expect as expectFn,
} from 'bun:test'

declare global {
  var mock: typeof mockFn
  var it: typeof itFn
  var expect: typeof expectFn
  var describe: typeof describeFn
}

globalThis.mock = mockFn
globalThis.it = itFn
globalThis.expect = expectFn
globalThis.describe = describeFn
