require("dotenv").config();
const { PrismaClient } = require("@prisma/client");
const { Pool } = require("pg");
const { PrismaPg } = require("@prisma/adapter-pg");

console.log(process.env.DATABASE_URL);

//create postgres pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

//Create prisma adapter
const adapter = new PrismaPg(pool);

//pass adapter to PrismaClient
const prisma = new PrismaClient({ adapter });

module.exports = prisma;
