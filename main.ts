// News-image entry: "Sum up 19 November's world news in one image".
// The entry's image is entry.png beside this file (a front page drawn
// for Thursday 19 November 2026: six stories plus a footer line). The
// program copies it, byte for byte, to /output/entry.png, so two runs
// always write the same bytes. Node 22, standard library only, no
// network: the grader runs it with /bot read-only and /output empty.
//
// Local run:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const source = new URL('./entry.png', import.meta.url);
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.png');

// The image must exist and be a whole PNG within the gate's limits.
const bytes = readFileSync(source);
if (bytes.length === 0 || bytes.length > 1048576) {
  throw new Error(`entry.png is ${bytes.length} bytes, outside 1..1048576`);
}
if (bytes[0] !== 0x89 || bytes[1] !== 0x50 || bytes[2] !== 0x4e || bytes[3] !== 0x47) {
  throw new Error('entry.png is not a PNG (bad magic bytes)');
}
// The IHDR chunk (bytes 16..24) carries width and height, big-endian;
// the gate also caps the image at 1024 by 1024 pixels. Check the chunk
// is really IHDR, and that the file ends with a whole IEND chunk, so a
// truncated or corrupt PNG is refused instead of copied.
if (bytes.toString('ascii', 12, 16) !== 'IHDR') {
  throw new Error('entry.png has no IHDR chunk at offset 12');
}
if (bytes.length < 12 || bytes.toString('ascii', bytes.length - 8, bytes.length - 4) !== 'IEND') {
  throw new Error('entry.png does not end with an IEND chunk');
}
const width = bytes.readUInt32BE(16);
const height = bytes.readUInt32BE(20);
if (width === 0 || width > 1024 || height === 0 || height > 1024) {
  throw new Error(`entry.png is ${width}x${height}, outside 1..1024 per side`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

const written = statSync(target);
if (written.size !== bytes.length) {
  throw new Error(`wrote ${written.size} bytes, expected ${bytes.length}`);
}
console.log(`wrote ${target} (${written.size} bytes)`);
