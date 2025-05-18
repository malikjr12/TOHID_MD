const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEhFUUFoMmRZK09lNTJHVk5CSGtad09zWTA5V09CeXFpZW5hS00zSWgxVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSGtDZWpWS2tBOVVGUWM5K256d1JVQURxakhFM0dGbFk2cmJHTENzVk1ROD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFQzdmeFJheWNaK0g0YjhJUWlNYTc4MVpqSXpiR3NCL3hJWkhKL0FDVVVzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQQk9CUjdGL1pxd0ttS0VwOE5GUnk0bHhZUHVYSDkxR0c4ZFR3UzBHVUJJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNMQlNKRkNDTXN2Z1g5dkphQTYrS1VrMG5tWU04Q2tGZDN4OFpvbnB1bnc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJzN24wbVU5cXptTmx2ZHMyQTNyTjAxa3VjQUIvZUlpY04yZ1NjWHRlWGM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0lKbFNiRU44MkRQRFRVWGoxcGJINmZpbkZGVUFCYkN3YVdSUEVDdzdrcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkhvTys3MUxCeUZnaDllcjN6RlFvV3ZzUy84MFFTcy8xYnFhUDcrbTZBcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlM2R2tTSllKOVlZQm9qUGZ3WmpqSUhaUDRXNW1jSGFCNG5zUnpiemlRWVJEaHVUV3c3TGtldmdGdWlSSWpVeUZ3ODR4MndOckh6QitXWURXUDZrSERnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzAsImFkdlNlY3JldEtleSI6InRQbnBudHoxd2k5R2JVWnk1Z3NtWTN1VHMrRGpNTm1yZXBQdGJLTFUrMWc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMTIwNDc5NDUzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkUyQ0U5QjBCODA0RjZEMkU5NjJBM0ZDNDI5QTFGQUZGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDc2MDM0MDd9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzEyMDQ3OTQ1M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzM0Q2QjkxQkNCNUM3QkNBRDgwQzI5MEFENTQ0MDkzRiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQ3NjAzNDA4fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMxMjA0Nzk0NTNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMzExQzczNjkyMjE0QUI0OEJBRTgxNTdBQjQxOEVCNjkifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0NzYwMzQyM30seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMTIwNDc5NDUzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijg3MDQyNzdEQkI4QTdBRDBBMzA4REZGQUJFQ0RGMjcxIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDc2MDM0Mjh9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzEyMDQ3OTQ1M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJENjdFMjhDNzYxMjdBQUMzNkQ2NjQxNDUwQzBGRjRFOSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQ3NjAzNDM0fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMxMjA0Nzk0NTNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMEFGMUI1RjEwRDk5NEQ3NjVDMjcwNDYxQUUwNDk2RDYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0NzYwMzQ0MH0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMTIwNDc5NDUzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjQ1NkQ3NjczQUM5MDY0RkU4MkNEODM4RTM5NTBEOURBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDc2MDM0NDV9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzEyMDQ3OTQ1M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI3NjkxRDczRkIwMTVCNDY3MDQzOUZBOTM2ODU0NzIwMCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQ3NjAzNDQ5fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiIxMjNMT1RVUyIsIm1lIjp7ImlkIjoiOTIzMTIwNDc5NDUzOjE0QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTQxMTMzMjYyOTA5NTEwOjE0QGxpZCIsIm5hbWUiOiJBc2FkIE1hbGlrIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMVGt4N0FCRU1HZnFjRUdHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJobFU0NUkxWlA1NS85Ri9rU1kwZHlvbVk2cGlUbVZwVUtGdkY5S2dTWG1RPSIsImFjY291bnRTaWduYXR1cmUiOiJDV1NMemxFSmNCN2F2bEhkWUJ6UFZiRW5zbk1MOC9ickhtSjlvRVNXU0JGTENCeklKN3loN09sVWFWOWUrNUUwbHV3NTJydGFDVEE5YjY1ODlzWFhDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoidXEyY0p6T1lpZklhTm9aNEh5SEowM1M4N0pwaksyOXpIeUVjaEdjdGFYNnd0V3F3VlFRemNOZHRUVVNDODg1QVN0UFJQMnlIK1hXblM5SDVBZmM3Q2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMxMjA0Nzk0NTM6MTRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWVpWT09TTldUK2VmL1JmNUVtTkhjcUptT3FZazVsYVZDaGJ4ZlNvRWw1ayJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQ3NjAzNDA1LCJsYXN0UHJvcEhhc2giOiIzUjlaMzkiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUdsViJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY TOHID_MD 🇮🇳*",
// set the auto reply massage on status reply  
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://i.ibb.co/4ZSYvPTq/lordali.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "TOHID_MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "TOHID_MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "917849917350",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "Mr Tohid",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝚃𝙾𝙷𝙸𝙳_𝙼𝙳*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/4ZSYvPTq/lordali.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> TOHID_MD BOT IS ALIVE*⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "917849917350",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
