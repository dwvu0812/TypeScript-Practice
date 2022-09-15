const rand = (maximum: number) => Math.floor(Math.random() * maximum);

class NameDatabase {
  private static ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  private availableNames!: string[];

  constructor() {
    this.releaseName();
  }

  public releaseName() {
    this.availableNames = this.allPossibleNames();
  }

  public allPossibleNames() {
    const names = [];
    for (const a of NameDatabase.ALPHABET) {
      for (const b of NameDatabase.ALPHABET) {
        for (let i = 0; i < 1000; i++) {
          names.push(`${a}${b}${i.toString().padStart(3, '0')}`)
        }
      }
    }
    return names;
  }

  public fetchNewName() {
    if (this.availableNames.length === 0) throw "no more names";

    const randomPosition = rand(this.availableNames.length);
    const name = this.availableNames[randomPosition];
    const lastName = this.availableNames.pop()!;

    if (name !== lastName) this.availableNames[randomPosition] = lastName;

    return name;
  }

}

const RobotDB = new NameDatabase();

class Robot {
  private _name!: string;

  public get name() {
    return this._name;
  }

  constructor() {
    this.resetName();
  }

  public resetName() {
    this._name = RobotDB.fetchNewName();
  }

  public static releaseName() {
    RobotDB.releaseName();
  }
}

const robot1 = new Robot();

console.log(robot1.resetName);
