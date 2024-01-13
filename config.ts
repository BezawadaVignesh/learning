import dotenv from 'dotenv';

dotenv.config();

export const config = {
    db: {
      host: "localhost",
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      connectTimeout: 60000,
      rowsAsArray: true,
    },
    listPerPage: 10,
  };
