import * as path from 'path';
import dbFactory from '../dbFactory';

async function migrate(): Promise<void> {
  const db = dbFactory();
  const directory = path.join(__dirname, '../migrations');

  try {
    await db.migrate.latest({ directory });
  } catch (e) {
    console.log(e);
  }
}

migrate();
