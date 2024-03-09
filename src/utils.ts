import { Client } from 'pg';

export async function getClient() {
    const client = new Client("postgres://xuspahio:QEBEZ_aWhZUKAH2_11zthtjMXTtwtpRG@flora.db.elephantsql.com/xuspahio");
    await client.connect();
    return client;
}