import Character from '../character';
import Bowman from '../bowman';
import Daemon from '../daemon';
import Magician from '../magician';
import Swordsman from '../swordsman';
import Undead from '../undead';
import Zombie from '../zombie';

test('test create instance fail', () => {
  expect(() => new Character('Ilya', 1234567)).toThrow();
});

test('test error name parameter', () => {
  expect(() => new Bowman('I')).toThrow();
  expect(() => new Bowman('Mission impossible')).toThrow();
});

test('test error parameters health, level, type, attack and defence', () => {
  expect(() => {
    const undead = new Undead('Ilya');
    undead.health = -500;
    undead.level = -2000;
    undead.type = 2345678;
    undead.attack = 'ABC';
    undead.defence = 1000;
    expect(undead.health).toBe(100);
    expect(undead.level).toBe(1);
    expect(undead.type).toBe('Undead');
    expect(undead.attack).toBe(25);
    expect(undead.defence).toBe(25);
  }).toThrow();
});

test('test class Bowman success', () => {
  const bowman = new Bowman('Ilya');
  expect(bowman.health).toBe(100);
  expect(bowman.level).toBe(1);
  expect(bowman.type).toBe('Bowman');
  expect(bowman.attack).toBe(25);
  expect(bowman.defence).toBe(25);
});

test('test class Swordsman success', () => {
  const swordsman = new Swordsman('Ilya');
  expect(swordsman.health).toBe(100);
  expect(swordsman.level).toBe(1);
  expect(swordsman.type).toBe('Swordsman');
  expect(swordsman.attack).toBe(40);
  expect(swordsman.defence).toBe(10);
});

test('test class Magician success', () => {
  const magician = new Magician('Ilya');
  expect(magician.health).toBe(100);
  expect(magician.level).toBe(1);
  expect(magician.type).toBe('Magician');
  expect(magician.attack).toBe(10);
  expect(magician.defence).toBe(40);
});

test('test class Undead success', () => {
  const undead = new Undead('Ilya');
  expect(undead.health).toBe(100);
  expect(undead.level).toBe(1);
  expect(undead.type).toBe('Undead');
  expect(undead.attack).toBe(25);
  expect(undead.defence).toBe(25);
});

test('test class Zombie success', () => {
  const zombie = new Zombie('Ilya');
  expect(zombie.health).toBe(100);
  expect(zombie.level).toBe(1);
  expect(zombie.type).toBe('Zombie');
  expect(zombie.attack).toBe(40);
  expect(zombie.defence).toBe(10);
});

test('test class Daemon success', () => {
  const daemon = new Daemon('Ilya');
  expect(daemon.health).toBe(100);
  expect(daemon.level).toBe(1);
  expect(daemon.type).toBe('Daemon');
  expect(daemon.attack).toBe(10);
  expect(daemon.defence).toBe(40);
});
