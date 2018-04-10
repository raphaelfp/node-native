const myAddon = require('./build/Release/addon');

console.log(myAddon.whoami());

myAddon.increment(0);
for (let i = 0; i < 10; i++) {
	console.log(`native addon increment: ${myAddon.increment(1)}`);
}
