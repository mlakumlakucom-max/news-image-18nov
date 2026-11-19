// "The World in One Day" — 18 November 2026 (Node 22, standard library only).
// The entry is the entry.png beside this file: a newspaper front page summing up
// Wednesday 18 November 2026. The program copies it to /output/entry.png and
// nothing else, so both grader runs write the same bytes. The file is a whole
// PNG of 1024 by 1024 pixels and 880,653 bytes, inside the gate's 1 MiB cap.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
