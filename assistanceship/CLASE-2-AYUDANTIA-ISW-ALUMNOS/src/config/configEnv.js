"use strict";
import dotenv from "dotenv";

dotenv.config();

export const HOST = process.env.DB_HOST || process.env.HOST || "localhost";
export const PORT = process.env.PORT || 3000;
export const DB_PORT = process.env.DB_PORT || 5432;
export const DB_USERNAME = process.env.DB_USERNAME;
export const PASSWORD = process.env.DB_PASSWORD;
export const DATABASE = process.env.DATABASE;
export const JWT_SECRET = process.env.JWT_SECRET;
export const cookieKey = process.env.COOKIE_KEY;

console.log('=== DEBUG DATABASE CONFIG ===');
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_USERNAME:', process.env.DB_USERNAME);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD ? '[HIDDEN]' : 'UNDEFINED');
console.log('DATABASE:', process.env.DATABASE);
console.log('HOST variable:', HOST);
console.log('DB_PORT:', DB_PORT);
console.log('===============================');