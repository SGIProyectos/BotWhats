const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client();

client.on('qr', qr => {
    console.log('📲 Escanea el siguiente QR con tu WhatsApp:');
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('✅ Bot conectado y listo.');
});

client.on('message', message => {
    const msg = message.body.toLowerCase();

    if (msg === 'hola' || msg === 'hi') {
        message.reply(
            '👋 ¡Hola! Soy el bot del negocio.\n' +
            '¿En qué puedo ayudarte?\n' +
            '1. Ver horarios\n' +
            '2. Ver ubicación\n' +
            '3. Consultar precios\n' +
            'Responde con el número de la opción.'
        );
    } else if (msg === '1') {
        message.reply('📅 Nuestros horarios son:\nLunes a Viernes de 9am a 6pm.');
    } else if (msg === '2') {
        message.reply('📍 Estamos en Calle Principal 123, Ciudad.');
    } else if (msg === '3') {
        message.reply('💰 Nuestros precios varían según el servicio. Escríbenos qué necesitas.');
    }
});

client.initialize();  // Asegúrate de que esta línea esté presente
