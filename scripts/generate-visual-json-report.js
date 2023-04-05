const { promisify } = require('util');
const { readdir, writeFile } = require('fs');
const { join: joinPath, relative } = require('path');

const asyncReaddir = promisify(readdir);
const writeFileAsync = promisify(writeFile);

const lostpixelDir = joinPath(__dirname, '..', '.lostpixel');
const actualDir = joinPath(lostpixelDir, 'current');
const expectedDir = joinPath(lostpixelDir, 'baseline');
const diffDir = joinPath(lostpixelDir, 'difference');

(async () => {
  const diffs = await asyncReaddir(diffDir);

  await writeFileAsync(
    joinPath(lostpixelDir, 'report.json'),
    JSON.stringify({
      newItems: [],
      deletedItems: [],
      passedItems: [],
      failedItems: diffs,
      expectedItems: diffs,
      actualItems: diffs,
      diffItems: diffs,
      actualDir: relative(lostpixelDir, actualDir),
      expectedDir: relative(lostpixelDir, expectedDir),
      diffDir: relative(lostpixelDir, diffDir),
    })
  );
})();
