// console.log(global);

/* setTimeout(() => {
    console.log("Hello");
}, 2000); */

/* console.log(__dirname); */

/* console.log(__filename); */

/* console.log(`hello ${process.argv[2]}`); */

const url = new URL('https://google.com/path/name#test');

console.log(url.hostname);
console.log(url.href);
console.log(url.pathname);
console.log(url.hash);
