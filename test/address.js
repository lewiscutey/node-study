var address = require('address');

// default interface 'eth' on linux, 'en' on osx.
const ip = address.ip();   // '192.168.0.2'
console.log(ip);

const ipv6 = address.ipv6(); // 'fe80::7aca:39ff:feb0:e67d'
console.log(ipv6);

address.mac(function (err, addr) {
  console.log(addr); // '78:ca:39:b0:e6:7d'
});

// local loopback
const lo = address.ip('lo'); // '127.0.0.1'
console.log(lo)

// vboxnet MAC
address.mac('vboxnet', function (err, addr) {
  console.log(addr); // '0a:00:27:00:00:00'
});
