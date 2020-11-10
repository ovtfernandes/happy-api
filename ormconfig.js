const url = process.env.DATABASE_URL;

const type = url ? 'postgres' : 'sqlite';
const database = url ? undefined : './src/database/database.sqlite';
const folder = url ? 'dist' : 'src';
const extension = url ? 'js' : 'ts';

module.exports = {
    type,
    database,
    url,
    migrations: [
        `./${folder}/database/migrations/*.${extension}`,
    ],
    entities: [
        `./${folder}/models/*.${extension}`,
    ],
    cli: {
        migrationsDir: `./${folder}/database/migrations`,
    }
};
