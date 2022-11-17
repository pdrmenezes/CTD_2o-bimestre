 const { subtracao } = require('../calc');

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