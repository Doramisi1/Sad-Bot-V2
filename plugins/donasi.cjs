var handler = async m => m.reply(`
╭─「 Donasi 」
│ • TELKOMSEL [6281368176386]
│ • DANA [6281368176386]
│ • OVO [6281368176386]
│ • GOPAY [6281368176386]
│ • SHOPPY PAY [6281368176386]
│ • Saweria [https://saweria.co/botstyle]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6281368176386
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
