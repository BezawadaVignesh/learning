import mysql, {Connection, RowDataPacket} from 'mysql2/promise';
import {config} from '../config';

export async function query(sql: string, params: any) {
    const connection: Connection = await mysql.createConnection(config.db);
    const [results, ] = await connection.execute(sql, params);
    if (!results) {
        return []
    }
    return results;
}
