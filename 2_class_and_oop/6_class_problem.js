class Country {
  name;
  idolGroups;
  constructor(name, idolGroups) {
    this.name = name;
    this.idolGroups = idolGroups;
  }
}
class IdolGroup {
  name;
  members;
  constructor(name, members) {
    this.name = name;
    this.members = members;
  }
}
class Idol {
  name;
  year;
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
class FemaleIdol extends Idol {
  sing() {
    return `${this.name}이 노래를 합니다.`;
  }
}
class MaleIdol extends Idol {
  sing() {
    return `${this.name}이 춤을 춥니다.`;
  }
}
const cIveMembers = iveMembers.map(
  (member) => new FemaleIdol(member["name"], member["year"])
);
const cBtsMembers = btsMembers.map(
  (member) => new MaleIdol(member["name"], member["year"])
);
const iveGroup = new IdolGroup("아이브", cIveMembers);
const btsGroup = new IdolGroup("BTS", cBtsMembers);

const korea = new Country("대한민국", [iveGroup, btsGroup]);

const allTogether = new Country("대한민국", [
  new IdolGroup(
    "아이브",
    iveMembers.map((member) => new FemaleIdol(member["name"], member["year"]))
  ),

  new IdolGroup(
    "BTS",
    btsMembers.map((member) => new MaleIdol(member["name"], member["year"]))
  ),
]);
