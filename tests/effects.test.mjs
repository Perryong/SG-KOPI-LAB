import assert from 'node:assert/strict';
import {stirProgress,createPourRig} from '../pouring.js';
import * as THREE from '../vendor/three.module.js';

assert.deepEqual(stirProgress(0),{motion:0,blend:0});
assert.deepEqual(stirProgress(.5),{motion:1,blend:1/3});
assert.deepEqual(stirProgress(1),{motion:0,blend:1});

const rig=createPourRig(new THREE.Group());
assert.ok(rig.contents,'Jug must contain a liquid mesh');
for(const kind of ['condensed','evaporated','coffee','water']){
 rig.update(kind,.2,1);
 const early=rig.contents.geometry.attributes.position.array.slice();
 rig.update(kind,.8,2);
 const late=rig.contents.geometry.attributes.position.array;
 assert.ok(late.every(Number.isFinite));
 assert.ok(late.some((v,i)=>i%3===1&&v<early[i]-.05),'Liquid drains while pouring');
 rig.update(kind,.2,1);
 assert.deepEqual(rig.contents.geometry.attributes.position.array,early,'Scrubbing restores fill');
}
rig.update('water',1,2);
assert.equal(rig.rig.visible,false);
