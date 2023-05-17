/* eslint-disable no-console */
import Character from './js/Character';
import Team from './js/Team';

const ironMan = new Character('Iron-Man', 'hero');
const spiderMan = new Character('Spider-Man', 'hero');
const blackWidow = new Character('Black Widow', 'hero');
const avengers = new Team();
avengers.add(ironMan);
avengers.addAll(spiderMan, blackWidow);

function showTeam(team) {
  console.log(team);
  return team;
}
showTeam(avengers);
console.log(avengers.toArray());
