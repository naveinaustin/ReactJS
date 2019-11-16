const counter = require("./myModule");

counter.inc();
counter.inc();
counter.inc();

console.log(counter.getCount());

counter.dec();
counter.dec();
console.log(counter.getCount());

const {inc, dec, getCount } = require("./myModule");

inc();
inc();
dec();
console.log(getCount());