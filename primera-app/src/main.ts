import "./style.css";

const age: number = 36;
const name: string = "Deddy";

interface Persona {
  name: string;
  age: number;
  lastName?: string;
}

const obj1: Persona = {
  name,
  age,
};

console.log(age, name, obj1);

function hello(name: string): string {
  return `Hola ${name}`;
}
