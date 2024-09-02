const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID |FLASH-MD-WA-BOT;;;=>eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUJacWhwT1kzNG9qbmRoeE1LZjJocjJuQURwdWVaRXlzdTBRRWdHL0wyZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN0hQaTNFQmVjOEdZUTIrZzZnelJmT0piVkY1UDBCcVlpWUtjb09RU2pYYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrQ3BSWFFzamp0b1FaZGxRUXlkRHovYXMxQ1pBUjR5R0hHNGk4M0Q1Z1ZvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXWEtVWi9Pand3L3ZNVDIyelJYRlVaamc4R3FuUHpJRXRMRXI0UW03ZnpzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllCdmNrMWtOU25zYVFYZ1E2MjIrSWpRWWE3NVNUTmV6NjJuRExxWStGVXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhYSHJ2ZUd2T0tqNmk1Z2VXTXgrbTQ4TWx0MHM3SlY1TVN0cnc4bWtoaDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0tqNGRyTDdpY05mQW9vandTdDNQdUZoWldCcXdRVmcybFZMaUNKNW8zUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNm16REp5SFYvN05hK1hMeU5mVGsxZXNISVV5MW9XTFBuR0R6UCsweGpIND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFqa0MrdUFKUWJWNE1lNUpHS1lBU0psa2s0WU5RTzJpd2FLbWNGeDdwTW1DUkl4cDVyQXlSSjhjVy9jRzFEMUNtTzQzZ28rUTU2WUZwTyt1MWZOVkJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjU1LCJhZHZTZWNyZXRLZXkiOiJ3ZHdmdzJ6SFNya2hLeS8vRWdab0hSOGk1UUw2dm1UNFJYQ1BwYmxVbTJRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJSNUQtdHZJdFJTR3laNjhPOUFodnFBIiwicGhvbmVJZCI6ImViZDU3YjhhLTNkNmYtNDExZi1iMzI1LWU3N2M0MjUzMDFiZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqZXRmTjUxemw2dTI1cjVKWmw1R3Z1Znc3cXM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoickxZVDRYZmVJd2U3UnNYM215ckYxWGF1WXVzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik05SlRQU0o3IiwibWUiOnsiaWQiOiIyMzM1NDQ2MjMwMDE6MjdAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09uS2lMWUxFT25KL3JVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkJ3Wk9EK3JVbnl2WGRoSlRZNXZFOG96MXJOL1ZJZXo0aHNsbU4rN05PRVU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjJiQVA2WTBSM1dPL2FCVXhaRE55WUt4ZU5DSXg3Qi8zN243UG9MS0hxNUxlL3E3d1Zxb0VEaElZN3VnQkdMbmkxV2lWMEZOMEtYMXF1RityV04zRmh3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ2Yll4MFRSckJtU1duczJEV3NqNnNWM1Exb3d1YTRJV2QvVVI4MWJEak8xWU8rcVM2QXpjRm9Odm94NWl6UW5mdm1HQnFEMFFkUlVZWmRONzd0NkZDQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzMzU0NDYyMzAwMToyN0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRY0dUZy9xMUo4cjEzWVNVMk9ieFBLTTlhemYxU0hzK0liSlpqZnV6VGhGIn19XSwicGxhdGZvcm0iOiJpcGhvbmUiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjM4MzU2Mzh9| 'FLASH-MD-WA-BOT;;;=>',
    PREFIXE: process.env.PREFIX || "+",
    OWNER_NAME: process.env.OWNER_NAME || "France King",
    OWNER_NUMBER : process.env.OWNER_NUMBER || "254105915061", 
    A_REACT : process.env.AUTO_REACTION || 'on',     
    AUTO_READ_STATUS: process.env.AUTO_VIEW_STATUS || "on",
AUTOREAD_MESSAGES: process.env.AUTO_READ_MESSAGES || "off",
CHATBOT: process.env.CHAT_BOT || "on",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_SAVE_STATUS || 'off',
    BOT : process.env.BOT_NAME || 'FLASH-MD',
    //OPENAI_API_KEY : process.env.OPENAI_API_KEY || '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',
    URL : process.env.BOT_MENU_LINKS || '',
    MODE: process.env.BOT_MODE || "private",
    PM_PERMIT: process.env.PM_PERMIT || 'off',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_API_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    PRESENCE : process.env.PRESENCE || '',
    //GPT : process.env.OPENAI_API_KEY || '',
    DP : process.env.STARTING_MESSAGE || "on",
//    ADM : process.env.ANTI_DELETE_MESSAGE || 'off',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://flashmd_user:JlUe2Vs0UuBGh0sXz7rxONTeXSOra9XP@dpg-cqbd04tumphs73d2706g-a/flashmd" : "postgresql://flashmd_user:JlUe2Vs0UuBGh0sXz7rxONTeXSOra9XP@dpg-cqbd04tumphs73d2706g-a/flashmd",
    /* new Sequelize({
     dialect: 'sqlite',
     storage: DATABASE_URL,
     logging: false,
})
: new Sequelize(DATABASE_URL, {
     dialect: 'postgres',
     ssl: true,
     protocol: 'postgres',
     dialectOptions: {
         native: true,
         ssl: { require: true, rejectUnauthorized: false },
     },
     logging: false,
}),*/
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

