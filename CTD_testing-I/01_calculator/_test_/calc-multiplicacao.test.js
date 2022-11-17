 const { multiplicacao } = require('../calc');

 describe('Teste da multiplicação', () => {
     test('Multiplicação de 2 números', () => {
         expect(multiplicacao(6, 2)).toBe(12);
     })

     test('Multiplicação de 0', () => {
         expect(multiplicacao(0, 0)).toBe(0);
     })
 })