import 'dotenv/config'
import postgres from 'postgres'

const { PGHOST, PGUSER, PGPASSWORD, PGDATABASE, PGPORT } = process.env;

export const sql = postgres({
    host: PGHOST,
    port: PGPORT,
    database: PGDATABASE,
    user: PGUSER,
    password: PGPASSWORD,
  });

// export default sql