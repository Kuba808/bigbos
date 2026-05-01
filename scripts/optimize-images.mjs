import sharp from 'sharp';
import { readdir, stat, rename, unlink } from 'fs/promises';
import { join, parse } from 'path';

const DIR = new URL('../src/imports/', import.meta.url).pathname;
const MAX_WIDTH = 1600;
const QUALITY = 78;

const files = (await readdir(DIR)).filter((f) => /\.(jpe?g|jfif|png)$/i.test(f));

for (const file of files) {
  const src = join(DIR, file);
  const { name } = parse(file);
  const dest = join(DIR, `${name}.jpg`);
  const tmp = join(DIR, `${name}.tmp.jpg`);
  const beforeBytes = (await stat(src)).size;

  await sharp(src)
    .rotate()
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .jpeg({ quality: QUALITY, mozjpeg: true, progressive: true })
    .toFile(tmp);

  if (src !== dest) await unlink(src);
  await rename(tmp, dest);
  const afterBytes = (await stat(dest)).size;
  console.log(
    `${file} → ${name}.jpg  ${(beforeBytes / 1024).toFixed(0)} KB → ${(afterBytes / 1024).toFixed(0)} KB`
  );
}
