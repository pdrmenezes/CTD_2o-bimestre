 const { soma, subtracao, divisao, multiplicacao } = require('../calc');

 describe('Teste da soma', () => {
     test('Soma de 2 números', () => {
         expect(soma(1, 2)).toBe(3);
     })
     test('Soma de 0', () => {
         expect(soma(0, 0)).toBe(0);
     })
     test('Soma de nulos', () => {
         expect(soma(null, null)).toBe(0);
     })
     test('Soma de texto', () => {
         expect(soma('a', 'b')).toBe(0);
     })
     test('Soma de undefined', () => {
         expect(soma()).toBe(NaN);
     })
 })

 describe('Teste da subtração', () => {
     test('Subtração de 2 números', () => {
         expect(subtracao(4, 1)).toBe(3);
     })
     test('Subtração de zeros', () => {
         expect(subtracao(0, 0)).toBe(0);
     })
     test('Subtração de undefined', () => {
         expect(subtracao()).toBe(NaN);
     })
 })

 describe('Teste da multiplicação', () => {
     test('Multiplicação de 2 números', () => {
         expect(multiplicacao(6, 2)).toBe(12);
     })
 })

 describe('Teste da divisao', () => {
     test('Divisão de 2 números', () => {
         expect(divisao(8, 2)).toBe(4);
     })
 })