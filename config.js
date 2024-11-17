const fs = require("fs");
require("dotenv").config();

module.exports = {
  //==========================================- MAIN - CONFIGS -==================================================================
  SESSION_ID: process.env.SESSION_ID || "noiseKey":{"private":{"type":"Buffer","data":"iNj8jE3UoUXoBkrftg2VoVi9KUjEQAfFb/W2nU9s72Y="},"public":{"type":"Buffer","data":"jHLtdzufPEsFJhMdSvfxS/5Oht319gssFT5WTtAyy3Y="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"mGgnNIkfCGl/RecWyHv4CDi3rtTjr/xLqas3S9f4HWk="},"public":{"type":"Buffer","data":"PWAfCgFrMEh+2jRoBkjxxdNavS4/nijXgXMLPb/eTm4="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"eMPNhzRhczumv0m6Doryp7nEzDypzdNc31E/BcXhHHQ="},"public":{"type":"Buffer","data":"AudsAXjSu28uZfW63uHz3+JkfaH3+3ZBPWhm/YHwCTE="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"UHDrCSf31ZQbj7mURmdoRrmy48cXvi6ZjmwlZxJylFY="},"public":{"type":"Buffer","data":"4biO/kaRujxGhAUKv1nNSIzD7PAK2zRn9oRTmFEjBWo="}},"signature":{"type":"Buffer","data":"VGOjHM4YL8eBT2R+wG8Oi+M0hdcchn22n+4YO24PdFtY793HMfZSp5G1k+68pU8nZmyyitY9TwIu8qS3w0AKjA=="},"keyId":1},"registrationId":62,"advSecretKey":"gncWjxGg6mx/sFr+jarbAJIgiUtrLX3TCDmVdu/3lao=","processedHistoryMessages":[{"key":{"remoteJid":"923144380914@s.whatsapp.net","fromMe":true,"id":"9059555A09D27B1295BF18C7BE10AC08"},"messageTimestamp":1731877370},{"key":{"remoteJid":"923144380914@s.whatsapp.net","fromMe":true,"id":"755F143027468DD35251E3F0BCCD7F54"},"messageTimestamp":1731877371}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":1,"accountSettings":{"unarchiveChats":false},"registered":true,"pairingCode":"Q6WQQJPJ","me":{"id":"923144380914:75@s.whatsapp.net","lid":"201047989555277:75@lid"},"account":{"details":"CLP268sBEOez6bkGGAEgACgA","accountSignatureKey":"mDF99zMlNgNOP9cXiB3mLT9vePZ4cPs6C7K8f+3ynn8=","accountSignature":"IiFkMEVQTROc1Z1QkICs97qV3JO8MbuX7qjs2j/ZKdvz0/LdQ96ppCtXNWJysE1o50CzKLZcGu43Tr2yTkb4Cg==","deviceSignature":"aAMEwjg3kA4fpR6lmzF1MPmmwSV6CRUqEmqe0TMz5O7aaMRmasIEF1F0dpm9dDEZST9hMh0zvBirC+mg9msDhA=="},"signalIdentities":[{"identifier":{"name":"923144380914:75@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BZgxffczJTYDTj/XF4gd5i0/b3j2eHD7OguyvH/t8p5/"}}],"platform":"android","routingInfo":{"type":"Buffer","data":"CAUIAg=="},"lastAccountSyncTimestamp":1731877365,"lastPropHash":"28ZRla","myAppStateKeyId":"AAAAALg7",
  // ADD Your Session Id 
  MONGODB: process.env.MONGODB || "mongodb+srv://kulathungaasitha319:yjHB0DvFfStNfwPS@cluster0.3oijd.mongodb.net/",
    // ADD Your MongoDB Database URL
  PREFIX: process.env.PREFIX || ".",
  // Add Your Custom Prefix 
  mode: process.env.mode || "public",
  // Add Your Bot Mode 
  // private = Only Working For Owner Number
  // public = AnyOne Working
  // inbox = Only Working  Inbox
  // groups = only working in group
  OWNER_NUMBER: process.env.OWNER_NUMBER || "94718913389",
  //========================================- OTHER - CONFIGS -=====================================================================
  AUTO_VOICE: process.env.AUTO_VOICE || "true",
  ANTI_BAD_WORDS_ENABLED: process.env.ANTI_BAD_WORDS_ENABLED || "true",
  AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
  AUTO_READ_CMD: process.env.AUTO_READ_CMD || "true",
  ANTI_BAD_WORDS: (process.env.ANTI_BAD_WORDS || "pakayo,huththo").split(','),
  ANTI_LINK: process.env.ANTILINK || "true",
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
  ALWAYS_TYPING: process.env.ALWAYS_TYPING || "true",
  ALWAYS_RECORDING: process.env.ALWAYS_RECORDING || "true",
  ANTI_BOT: process.env.ANTI_BOT || "true",
  ANTI_DELETE: process.env.ANTI_DELETE || "true",
  packname: process.env.packname || "SAHAS TECH",
  author: process.env.author || "SAHAS TECH",
  //==========================================- API-CONFIGS -==========================================================
  OPENWEATHER_API_KEY: process.env.OPENWEATHER_API_KEY || "2d61a72574c11c4f36173b627f8cb177", //openweathermap.org
  ELEVENLABS_API_KEY: process.env.ELEVENLABS_API_KEY || "sk_6438bcc100d96458f8de0602aec662f4ba14b905fd090ad3", //elevenlabs.io
  SHODAN_API: process.env.SHODAN_API || "cbCkidr6qd7AFVaYs56MuCouGfM8gFki", //developer.shodan.io
  PEXELS_API_KEY: process.env.PEXELS_API_KEY || "39WCzaHAX939xiH22NCddGGvzp7cgbu1VVjeYUaZXyHUaWlL1LFcVFxH", // pexels.com
  OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
  PIXABAY_API_KEY: process.env.PIXABAY_API_KEY || "23378594-7bd620160396da6e8d2ed4d53", // pixabay.com
  ZIPCODEBASE_API_KEY: process.env.ZIPCODEBASE_API_KEY || "0f94a5f0-6ea4-11ef-81da-579be4fb031c", // zipcodebase.com
  GOOGLE_API_KEY: process.env.GOOGLE_API_KEY || "AIzaSyD93IeJsouK51zjKgyHAwBIAlqr-a8mnME", 
  GOOGLE_CX: process.env.GOOGLE_CX || "AIzaSyD93IeJsouK51zjKgyHAwBIAlqr-a8mnME", 
  PASTEBIN_API_KEY: process.env.PASTEBIN_API_KEY || "uh8QvO6vQJGtIug9WvjdTAPx_ZAFJAxn",


//------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------

  
  START_MSG: process.env.START_MSG || `🚀 *_SAHAS-MD Connected Successfully!_* ✅ 

--- *👨‍💻🎉 _Welcome to SAHAS-MD!_* 🎉💗 

*🔹 OWNER:* 94718913389

_Thank you for using_ *👨‍💻SAHAS-MD💗.*
_We're here to make your experience enjoyable and seamless._
_If you need any help or have questions, don't hesitate to ask._ 🌝💗

*🖇️Join My WhatsApp Channel✓💗 - :* https://whatsapp.com/channel/0029VaiTjMlK5cDLek3bB533

*🖇️Subscribe My Youtube Channel✓💗 - :* https://www.youtube.com/@Sahas_Tech

*🖇️Fork & Star My Repo✓💗 - :* https://github.com/SahasTech22/SAHAS-MD

*🖇️Follow My Github Account✓💗 - :* https://github.com/SahasTech22

_*👨‍💻 Enjoy your time with us! 😊*_

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ*` ,

  ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/de82e3.jpg",
  MENU_IMG: process.env.MENU_IMG || "https://files.catbox.moe/de82e3.jpg",
  MENU_MSG: process.env.MENU_MSG || `Menumsg`,
    MENU_MS: process.env.MENU_MS || `menu 2`,

};
