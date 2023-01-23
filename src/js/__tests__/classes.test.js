import Character from '../character';
import Bowman from '../bowman';

test('short class name', () => {
  expect(() => new Bowman('I')).toThrow();
});

test('long class name', () => {
  expect(() => new Bowman('Mission impossible')).toThrow();
});

test('invalid class type', () => {
  expect(() => new Character('Ilya', Number)).toThrow();
});

test('invalid class instance name type', () => {
  expect(() => new Bowman(123456)).toThrow();
});

test('health parameter is correct', () => {
  const bowman = new Bowman('Ilya');
  expect(bowman.health).toBe(100);
});

test('level parameter is correct', () => {
  const bowman = new Bowman('Ilya');
  expect(bowman.level).toBe(1);
});

test('attack parameter is correct', () => {
  const bowman = new Bowman('Ilya');
  expect(bowman.attack).toBe(25);
});

test('defence parameter is correct', () => {
  const bowman = new Bowman('Ilya');
  expect(bowman.defence).toBe(25);
});
