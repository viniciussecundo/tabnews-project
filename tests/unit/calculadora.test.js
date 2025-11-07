const calculadora = require("../../MODELS/calculadora");

test("somar 2 + 2 deveria retornar 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("somar 5 + 100 deveria retornar 105", () => {
  const resultado = calculadora.somar(5, 100);
  expect(resultado).toBe(105);
});

test("somar 'banana' + 100 deveria retornar 500'Erro'", () => {
  const resultado = calculadora.somar("banana", 100);
  expect(resultado).toBe("Erro");
});

test("multiplicar 2 * 25 deveria retornar 50", () => {
  const resultado = calculadora.multiplicar(2, 25);
  expect(resultado).toBe(50);
});

test("multiplicar 2 / 20 deveria retornar 50", () => {
  const resultado = calculadora.dividir(20, 2);
  expect(resultado).toBe(10);
});
