import { fizzbuzz } from './fizzbuzz';

it('devuelve 1 para el número 1', () => {
  expect(fizzbuzz(1)).toBe('1');
});

it('devuelve 2 para el número 2', () => {
  expect(fizzbuzz(2)).toBe('2');
});

it('devuelve Fizz para el número 3', () => {
  expect(fizzbuzz(3)).toBe('Fizz');
});
