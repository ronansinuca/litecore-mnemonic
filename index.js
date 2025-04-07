//module.exports = require('./lib/mnemonic');

var Mnemonic = require('./lib/mnemonic');//require('bitcore-mnemonic');
var code = new Mnemonic(Mnemonic.Words.PORTUGUESE);
var phrase = code.phrase;
//console.log(phrase)
console.log(code.toString()); // natal hada sutil año sólido papel jamón combate aula flota ver esfera...
var wallet = code.toHDPrivateKey();



console.log(wallet)
console.log("xpriv", wallet.xprivkey)
//console.log("publicKey", wallet.privateKey.publicKey)
console.log("hdPublicKey", wallet.hdPublicKey.xpubkey)
//console.log("xpubkey", wallet.xpubkey)
