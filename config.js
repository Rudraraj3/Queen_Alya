//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "./lib/alya.jpg";
global.devs = "2348100835767";
global.sudo = process.env.SUDO || "919883457657,919883457657";
global.owner = process.env.OWNER_NUMBER || "919883457657";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "./lib/alya.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUJVRjRnbU0zVnBObVNxZGNiWDZ4VHlxREkxT3A0QVR2UGlZSHBtNkxVaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUphZ0ZjalljLzlYREZoNUFQTHArc2RDem15endBNG9vSnlFR003NTV5bz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlRXZHTURhWG1RaDR2WGpsbWtNUjcvMjZIa1JBQ0R3dW1ycWt0QlN0WVhRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJazIrTWhiRUtoc2tlb0N4czQweEZnZ3hHYlQwenhyS0NKMmZqVVV1alJRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFMWDQrY1ZsZ1RkNGhyaWVRVzVxRG0vLytZN2xjTWllejJJeHdkci9yVVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllRT3JhNnNNS0hCcG13blZlVzRoYklNQ0pCdW81YUdTcCtPS0hkanBoejg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia01uUVlWTDQ5NDdYZE4rQUNKOWozWFpLa1J5QlF3R0RkRXhGRE9iSUNFdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibWxQbUNvalM2NDA3OHdkVm4zc0xaUFl3UFFuNVNNV1RJMS9Fc0ZTZ2pFVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldMUElPVWI5RERsR0FKeUd0UXQzVUpscWE2Yk1hVjZxMGtIUG1FY3dZL3VJZEI5QkF3eERLbnNlZTQ3OHF2bFM0RGp0THNCRlJ1emVmVHpxeWV0REN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE4LCJhZHZTZWNyZXRLZXkiOiJWd0NUUkJvRjFwTXhmNThMNjFvMlFNQnRvMEs5WkxxZkFCbkU3ZEZFQkNBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkxOTg4MzQ1NzY1N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI0ODRFRDlENERCMDAyRTgxM0E0ODc4QzY4MzI1QjcwNiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI2NDYzMzg0fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MTk4ODM0NTc2NTdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRTY5RjlGM0ZEMDQwNTc0OUVCNUU3QjNDOTlFNDkxQkEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNjQ2MzM4NX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiU2U2N0RxWXNTOHlEUGk4T2pUMGFjQSIsInBob25lSWQiOiJkNmNmZjBhNi0xMjY0LTRlZDMtODljZi1iYTAwYTYxODVmNjUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRG43UXJzTjVFZ3NNT3NPcW5nendlNjRhVUVvPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjN0RUY5Q0J6bVdaZXZtdndnVzkrbGVGSUNndz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI2SzJSNjNGUiIsIm1lIjp7ImlkIjoiOTE5ODgzNDU3NjU3OjE1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuqrneG0mMqAyarKj+G0j+qrnSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTi9Qcks0Q0VJbjducmNHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiR3Qxd3phOFloVnY4S1ZJeHE2RUJDSEJ3ZzQ0OTNzNDFzQVQ5Q2hFSjhqcz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiV3F6YXVmRE95NjlEcSs1VGZOVmszdjZrWlBRUUlXR0hjUVEvcE9GQ2srOGZyTEJCWXBrRjJ3eVVLa1l5VnpNa2JUYW1UemJaN0xrSWFWaTVxUnZBQVE9PSIsImRldmljZVNpZ25hdHVyZSI6InFoakI2NG9lQXB3MkplUVFKVFRrZjRlbW9BSDFxNVUxYUNjWFAreVE4YTFOaTVEbzF0SzA1ajhveEJqUFdwNUR0bE51SXRYdU40YjY3NFh2cjhhL0J3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTE5ODgzNDU3NjU3OjE1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJyZGNNMnZHSVZiL0NsU01hdWhBUWh3Y0lPT1BkN09OYkFFL1FvUkNmSTcifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjY0NjMzODIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSWNuIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
  ownername: process.env.OWNER_NAME || "STAR KING",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
