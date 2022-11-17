 const { divisao } = require('../calc');

 describe('Teste da divisao', () => {
     test('Divisão de 2 números', () => {
         expect(divisao(8, 2)).toBe(4);
     })
 })