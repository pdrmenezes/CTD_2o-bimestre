 const { soma } = require('../calc');

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