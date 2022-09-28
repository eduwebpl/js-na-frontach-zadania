/**
 * Dla uproszczenia obrazu sprawy — wszystkie klasy i logika aplikacji
 * zostały napisane w jednym pliku.
 *
 * ... oczywiście, że to razi po oczach — nie możemy tak tego zostawić w finałowej wersji!
 * */

type Title = 'princess' | 'king' | 'queen' | 'knight' | 'peasant'

class Castle {
  constructor(private dungeon: Dungeon) {}

  gotoTheDungeon(daredevil: Person) {
    // #RQ1: peasant cannot be at the Castle !
    this.dungeon.enter(daredevil)
  }
}

class Dungeon {
  constructor(private underground: Underground) {}

  enter(p: Person) {
    // #RQ2: queen cannot enter the dungeon!
    this.underground.enter(p)
  }
}

class Underground {
  private static INITIAL_NO_OF_BARRICADES = 3
  private noOfBarricades = Underground.INITIAL_NO_OF_BARRICADES

  constructor(private prisoner: Person) {}

  enter(savior: Person) {
    // #RQ3: king cannot enter Underground !
    savior.shoutTheName()
    this.saveThePrisoner(savior)
  }

  private saveThePrisoner(savior: Person) {
    // #RQ4: only knight can attempt to save prisoner!
    // #RQ5: If not knight Evil dragon will set up new barricade
    // #RQ6: one knight will remove one barricade
    if (this.hasNoBarricades()) {
      this.prisoner.sayThanks()
    }
  }

  // Clean state:
  initTheBarricades() {
    this.noOfBarricades = Underground.INITIAL_NO_OF_BARRICADES
  }

  private removeBarricade() {
    this.noOfBarricades -= 1
  }

  private hasNoBarricades() {
    return this.noOfBarricades === 0
  }
}

class Person {
  constructor(private name: string, public readonly title: Title) {}

  shoutTheName() {
    console.log(`I'am ${this.name}! The ${this.title}.`)
  }

  sayThanks() {
    console.log(`${this.name}: Thank you...`)
  }
}

const princess = new Person('Fiona', 'princess')
const hades = new Underground(princess)
const cave = new Dungeon(hades)
const kingdom = new Castle(cave)

// Śmiałkowie:
const knightJohn = new Person('John', 'knight')
const knightBrienne = new Person('Brienne', 'knight')
const kingFrancis = new Person('Francis', 'king')
const peasantMathew = new Person('Mathew', 'peasant')
const queenBianca = new Person('Bianca', 'queen')
const knightBruce = new Person('Bruce', 'knight')

// Próba "odbicia" królewny z podziemi lochów:

// Misja ratunkowa nr 1:
hades.initTheBarricades()
kingdom.gotoTheDungeon(knightJohn)
kingdom.gotoTheDungeon(knightBrienne)
kingdom.gotoTheDungeon(kingFrancis)

// Misja ratunkowa nr 2:
hades.initTheBarricades()
kingdom.gotoTheDungeon(knightJohn)
kingdom.gotoTheDungeon(knightBrienne)
kingdom.gotoTheDungeon(peasantMathew)

// Misja ratunkowa nr 3:
hades.initTheBarricades()
kingdom.gotoTheDungeon(knightBrienne)
kingdom.gotoTheDungeon(knightJohn)
kingdom.gotoTheDungeon(queenBianca)

// Misja ratunkowa 4:
hades.initTheBarricades()
kingdom.gotoTheDungeon(knightBrienne)
kingdom.gotoTheDungeon(knightJohn)
kingdom.gotoTheDungeon(knightBruce)
