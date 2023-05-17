import Team from '../Team';
import Character from '../Character';

test('Создается инстанс класса Team', () => {
  const avengers = new Team();
  const res = { members: new Set() };
  expect(avengers).toEqual(res);
});
test('Создается инстанс класса Character', () => {
  const ironMan = new Character('Iron-Man', 'hero');
  const res = { name: 'Iron-Man', type: 'hero', stamina: 100 };
  expect(ironMan).toEqual(res);
});
test('Добавление персонажа в команду', () => {
  const ironMan = new Character('Iron-Man', 'hero');
  const avengers = new Team();
  avengers.add(ironMan);
  const res = {
    members: new Set([{ name: 'Iron-Man', type: 'hero', stamina: 100 }]),
  };
  expect(avengers).toEqual(res);
});
test('Добавление нескольких персонажей в команду', () => {
  const ironMan = new Character('Iron-Man', 'hero');
  const spiderMan = new Character('Spider-Man', 'hero');
  const blackWidow = new Character('Black Widow', 'hero');
  const avengers = new Team();
  avengers.addAll(ironMan, spiderMan, blackWidow);
  const res = {
    members: new Set([
      { name: 'Iron-Man', type: 'hero', stamina: 100 },
      { name: 'Spider-Man', type: 'hero', stamina: 100 },
      { name: 'Black Widow', type: 'hero', stamina: 100 }]),
  };
  expect(avengers).toEqual(res);
});
test('Коллекция персонажей преобразовывается в массив', () => {
  const ironMan = new Character('Iron-Man', 'hero');
  const spiderMan = new Character('Spider-Man', 'hero');
  const blackWidow = new Character('Black Widow', 'hero');
  const avengers = new Team();
  avengers.addAll(ironMan, spiderMan, blackWidow);
  const newArr = avengers.toArray();
  const res = [
    { name: 'Iron-Man', type: 'hero', stamina: 100 },
    { name: 'Spider-Man', type: 'hero', stamina: 100 },
    { name: 'Black Widow', type: 'hero', stamina: 100 },
  ];
  expect(newArr).toEqual(res);
});
test('Ошибка повторного добавления персонажа в команду', () => {
  const ironMan = new Character('Iron-Man', 'hero');
  const avengers = new Team();
  avengers.add(ironMan);
  const error = 'Персонаж уже существует в команде';
  expect(() => {
    avengers.add(ironMan);
  }).toThrow(error);
});
test('При добавлении сразу нескольких одинаковых персонажей в команду, не произойдет задвоений', () => {
  const ironMan = new Character('Iron-Man', 'hero');
  const spiderMan = new Character('Spider-Man', 'hero');
  const blackWidow = new Character('Black Widow', 'hero');
  const avengers = new Team();
  avengers.addAll(ironMan, spiderMan, blackWidow, ironMan, spiderMan);
  const res = {
    members: new Set([
      { name: 'Iron-Man', type: 'hero', stamina: 100 },
      { name: 'Spider-Man', type: 'hero', stamina: 100 },
      { name: 'Black Widow', type: 'hero', stamina: 100 }]),
  };
  expect(avengers).toEqual(res);
});
