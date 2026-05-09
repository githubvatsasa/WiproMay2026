function sayHello(name:string): string{
    return `Hello ${name} !`
}
const message = sayHello("Ram");
console.log(message);

let check = (name:string) => console.log(name);
check("Ram");

