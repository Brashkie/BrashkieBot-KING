var handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let pp = gataImg.getRandom()	
const cat = `
╭ ❖ ── ✦ ── ✦ ── ❖ ──╗
│
│ ✥𝓑𝓻𝓪𝓼𝓱𝓴𝓲𝓮 𝓓𝓲𝓸𝓼✥ 
│ *Wa.me/51918340705*
│
│ 𝑖𝑍𝑖
│ *wa.me/527442363122*
│
│ シ︎𝑾𝒊𝒍𝖘𝒐𝒏シ︎
│ *wa.me/5492964650915*
│
│*GRUPO OFICIAL DE BrashkieBot*
│*https://chat.whatsapp.com/CnBH1Cdi1pG9jWjmAeUVGW*
│
│𝓑𝓻𝓪𝓼𝓱𝓴𝓲𝓮 𝓓𝓲𝓸𝓼 - 𝘼𝙎𝙄𝙎𝙏𝙀𝙉𝘾𝙄𝘼
│*${asistencia}*
╰─ ❖ ── ✦ ── ✦ ── ❖ ──╝`

await conn.sendFile(m.chat, pp, 'gata.mp4', cat, fkontak)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|propietario|dueño|dueña|propietaria|dueño|creadora|creador)$/i

export default handler
