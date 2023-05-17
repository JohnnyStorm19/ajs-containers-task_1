export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Персонаж уже существует в команде');
    }
    this.members.add(character);
  }

  addAll(...characters) {
    characters.forEach((obj) => {
      if (!this.members.has(obj)) {
        this.members.add(obj);
      }
    });
  }

  toArray() {
    return Array.from(this.members);
    // return [...this.members]
  }
}
