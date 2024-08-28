import "./style.css";
import { Fruit } from "./interface.ts";

const frutasArr = [
  "manzana",
  "plátano",
  "naranja",
  "fresa",
  "uva",
  "piña",
  "mango",
  "sandía",
  "pera",
  "melocotón",
];

const frutasObj: Fruit[] = [
  { nombre: "manzana", color: "rojo", precio: 1.5 },
  { nombre: "plátano", color: "amarillo", precio: 0.5 },
  { nombre: "naranja", color: "naranja", precio: 0.8 },
  { nombre: "fresa", color: "rojo", precio: 2.0 },
  { nombre: "uva", color: "morado", precio: 1.2 },
  { nombre: "piña", color: "amarillo", precio: 3.0 },
  { nombre: "mango", color: "naranja", precio: 2.5 },
  { nombre: "sandía", color: "verde", precio: 4.0 },
  { nombre: "pera", color: "verde", precio: 1.3 },
  { nombre: "melocotón", color: "amarillo", precio: 1.8 },
];

const $frutasArr = document.querySelector("#lista") as HTMLUListElement;

frutasArr.forEach((fruta) => {
  const $li = document.createElement("li") as HTMLLIElement;
  $li.textContent = fruta;
  $frutasArr.append($li);
});

frutasObj.forEach((fruta) => {
  const $li = document.createElement("li") as HTMLLIElement;
  $li.textContent = `${fruta.nombre} - ${fruta.precio}`;
  $frutasArr.append($li);
});
