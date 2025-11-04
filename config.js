const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "923071782626" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923071782626";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923071782626";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '5'  // put '5' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_03_50_11_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDk4LFxuICAgICAgICAxODUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTY2LFxuICAgICAgICA3LFxuICAgICAgICA4NixcbiAgICAgICAgNzMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDUwLFxuICAgICAgICA2MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTk2LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAzNyxcbiAgICAgICAgNjksXG4gICAgICAgIDgwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjksXG4gICAgICAgIDcyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTE3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxODksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTU4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNzksXG4gICAgICAgIDAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDY5LFxuICAgICAgICAzOSxcbiAgICAgICAgOTksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQwLFxuICAgICAgICA4MixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMCxcbiAgICAgICAgMixcbiAgICAgICAgMTIzLFxuICAgICAgICA1MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMCxcbiAgICAgICAgMjM4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTksXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDUyLFxuICAgICAgICAxMSxcbiAgICAgICAgNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDQ5LFxuICAgICAgICA1LFxuICAgICAgICAxODQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOSxcbiAgICAgICAgMTk5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDYyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTIxLFxuICAgICAgICA2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOCxcbiAgICAgICAgMjQwLFxuICAgICAgICA0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDU4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDc1LFxuICAgICAgICA5OCxcbiAgICAgICAgODMsXG4gICAgICAgIDcxLFxuICAgICAgICA0MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODcsXG4gICAgICAgIDI4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTg4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDcyLFxuICAgICAgICA5NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTA4LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZWgwajgwN1NLbkZSeXFZdGhnTnNJMDhqaWZ2QmhwWjk1N2QvQnFSeTZMdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwNzE3ODI2MjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkE1RTEyNzg4RkFDQTdGRjkyODc5OUQ1QUU1MzJEOUFBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc2MjIyODI0NVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJiM0NtSHRERVRvQ2hoUUVVd3k0WTRnXCIsXG4gIFwicGhvbmVJZFwiOiBcImI4NmIzNzIwLWQyYWUtNGYyNi1iZDUxLTlhZGI2NjRjN2M2NVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MCxcbiAgICAgIDk0LFxuICAgICAgODAsXG4gICAgICAxMTcsXG4gICAgICA2MyxcbiAgICAgIDI1LFxuICAgICAgMTk4LFxuICAgICAgNzYsXG4gICAgICAyMSxcbiAgICAgIDQ0LFxuICAgICAgMzMsXG4gICAgICA0NSxcbiAgICAgIDUyLFxuICAgICAgMTY2LFxuICAgICAgMixcbiAgICAgIDgxLFxuICAgICAgMjM4LFxuICAgICAgMTQyLFxuICAgICAgMzcsXG4gICAgICAxMjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExOSxcbiAgICAgIDEsXG4gICAgICAyNDAsXG4gICAgICA3MCxcbiAgICAgIDI5LFxuICAgICAgMjE0LFxuICAgICAgNjQsXG4gICAgICA2LFxuICAgICAgNTYsXG4gICAgICAyMzIsXG4gICAgICAxNDYsXG4gICAgICA1NCxcbiAgICAgIDI1MyxcbiAgICAgIDg5LFxuICAgICAgMTcyLFxuICAgICAgMjgsXG4gICAgICAyNDMsXG4gICAgICAyNTQsXG4gICAgICAyMDksXG4gICAgICA1M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tpQTJLNENFSXp3cGNnR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNkdmTmIxMVMvOTBvL2twaXJIbHJBY3pmbmt5eUdOYURLa3NMRzdFMFZGOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJWcWE3TkdUckZ2ZDExWHIvcHRHOHdvRG14V0tHVEo1eVRSUUlFNzVkNElUVVl3cDFURTJmaDRvWjRCUWxzWUpqa3htTk9TUlB1RVpidm1JNHNoSExCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJzbGlLdGt0TC83M3ZaNk9hSmE2VDZJOW1jMEJvYzBzVXUvZWNsNDc2K0NVR0xwbU44bk5sNlo1enJ4Wmt4Qjh1b05XYjRVM0dDS29PeHh6bHFSSDlCZz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzA3MTc4MjYyNjo1OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdk6HwnZOq8J2Ts/Cdk74gNTkxMVwiLFxuICAgIFwibGlkXCI6IFwiMjYyMjY0MTkyMDIwNzI0OjU4QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDcxNzgyNjI2OjU4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDk1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NjIyMjgyNDEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFETy9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQURPX18uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJuc0dXS0IzZjFRa0hRSys5K29TSm8wbnd6dVBhS1BNcGJOYVdNVXJQWDY4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjYzNDc4MTczNixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzYyMjIzOTYyODY1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Raju Boss",
  packname: process.env.PACK_NAME || "Raju Boss",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Raju Boss",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "sk_e17fe171b8d395b9df440e504aa8aeaacb08ead66db9692e";
global.aitts_Voice_Id = process.env.AITTS_ID|| "wHI7GVgoHNG9c8H7zXAt";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
