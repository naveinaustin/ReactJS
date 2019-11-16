console.log(process.pid);
console.log(process.versions.node);

console.log(process.argv);

const [ , , ,firstName, ,lastName] = process.argv;

console.log(`Your name is ${firstName} ${lastName}`);

const grab = flag => {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag];
}

const greeting = grab("--greeting");
const user = grab("--name");

//Run: node globalProcess --name "Navein Fernandes" --greeting "Hello"
console.log(`Value entered ${greeting} ${user}` )