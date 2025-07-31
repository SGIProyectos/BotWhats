// index.js
const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const client = new Client();

const respuestas = {
  menu: require('./respuestas/menu'),
  servicios: require('./respuestas/servicios'),
  precios: require('./respuestas/precios'),
  ubicacion: require('./respuestas/ubicacion'),
  horario: require('./respuestas/horario'),
  contacto: require('./respuestas/contacto'),
  default: require('./respuestas/default')
};

client.on('qr', (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log('✅ Bot conectado y listo');
});

client.on('message', async (msg) => {
  const text = msg.body.toLowerCase();

  if (text === 'hola' || text === 'hi') return respuestas.menu(msg);
  if (text === '1') return respuestas.servicios(msg);
  if (text === '2') return respuestas.precios(msg);
  if (text === '3') return respuestas.ubicacion(msg);
  if (text === '4') return respuestas.horario(msg);
  if (text === '5') return respuestas.contacto(msg);

  return respuestas.default(msg);
});

client.initialize();

// respuestas/menu.js
module.exports = (msg) => {
  msg.reply(
    '👋 ¡Hola! Bienvenido a SGI Centro de Copiado\n\n¿En qué podemos ayudarte?\n\n1. Ver nuestros servicios\n2. Consultar precios\n3. Ver ubicación\n4. Horarios de atención\n5. Medios de contacto'
  );
};

// respuestas/servicios.js
module.exports = (msg) => {
  msg.reply(
    '📌 Servicios disponibles:\n\n- Impresión en Gran Formato\n- Bordado\n- Impresión de Planos Arquitectónicos\n- Corte de Vinil\n- Anuncios Neón\n- Centro de Copiado\n- Corte Láser\n\nPara más detalles, escribe el nombre del servicio.'
  );
};

// respuestas/precios.js
module.exports = (msg) => {
  msg.reply(
    '💰 Precios aproximados:\n\n📌 Gran Formato:\n- Lona: $120.00 / m²\n- Vinil: $250.00 / m²\n- Microperforado: $300.00 / m²\n\n📐 Planos:\n- B/N: $55.00\n- Color: $70.00\n- Escaneo: $60.00\n\n👕 Bordado: según puntadas + ponchado ($60)\n\n📄 Copias:\n- B/N Carta: $1.50\n- B/N Impresión: $2.00\n- Color: $5.00–$10.00\n- Etiquetas suajadas: $25 por hoja\n\n✂️ Corte de vinil y láser: requiere cotización'
  );
};

// respuestas/ubicacion.js
module.exports = (msg) => {
  msg.reply(
    '📍 Nuestra dirección es:\n\nC. Ramos Millán No. 27\nCol. Kennedy\nHgo. del Parral, Chih.\n\n🗺️ Ver en Google Maps:\nhttps://maps.google.com/?q=27.238994,-105.676115'
  );
};

// respuestas/horario.js
module.exports = (msg) => {
  msg.reply(
    '🕒 Horarios de atención:\n\nLunes a Viernes\n9:00 a 14:00 y 17:00 a 19:00\n\nSábados\n9:00 a 13:00'
  );
};

// respuestas/contacto.js
module.exports = (msg) => {
  msg.reply(
    '📞 Teléfono fijo: 627 523 0705\n📱 WhatsApp: 627 105 8353\n📧 Correo: sgi.centrocopiado@hotmail.com'
  );
};

// respuestas/default.js
module.exports = (msg) => {
  msg.reply(
    '🤖 No pude procesar tu mensaje. Puedes escribir "hola" para ver las opciones disponibles.'
  );
};
