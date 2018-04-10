const ffi = require('ffi');
const path = require('path');

const rust = ffi.Library(path.join(__dirname, './target/debug/fibonacci'), {
	fibonacci: ['int', ['int']]
});

console.log(rust.fibonacci(42));
