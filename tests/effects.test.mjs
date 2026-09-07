import assert from 'node:assert/strict';
import {stirProgress} from '../pouring.js';

assert.deepEqual(stirProgress(0),{motion:0,blend:0});
assert.deepEqual(stirProgress(.5),{motion:1,blend:1/3});
assert.deepEqual(stirProgress(1),{motion:0,blend:1});
