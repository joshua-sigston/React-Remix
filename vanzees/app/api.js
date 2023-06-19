import fs from 'fs/promises';

export async function getData() {
  const rawFileContent = await fs.readFile('server.json', { encoding: 'utf-8' });
  const data = JSON.parse(rawFileContent);
  const storedData = data.vans ?? [];
  return storedData;
}

export function storedVans(vans) {
  return fs.writeFile('vans.json', JSON.stringify({ vans: vans || [] }));
}