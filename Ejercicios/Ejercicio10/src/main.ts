import "./style.css";

const operationsForm = document.querySelector("#operationsForm");

// Función para obtener el valor de un elemento del formulario
const getValue = (id: string) =>
  parseFloat((document.querySelector(id) as HTMLInputElement).value);

type Operation = "sum" | "sub" | "mul" | "div";

const operations: Record<Operation, (a: number, b: number) => number> = {
  sum: (a: number, b: number) => a + b,
  sub: (a: number, b: number) => a - b,
  mul: (a: number, b: number) => a * b,
  div: (a: number, b: number) => a / b,
};

operationsForm?.addEventListener("submit", (e) => {
  e.preventDefault();

  const number1: number = getValue("#number1");
  const number2: number = getValue("#number2");
  const operation: Operation = (
    document.querySelector("#operation") as HTMLSelectElement
  ).value as Operation;

  const result = operations[operation](number1, number2);

  const resultElement = document.querySelector("#result");

  if (resultElement) {
    resultElement.textContent = `${result}`;
  }
});
