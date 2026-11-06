
class Animal {
    constructor(nom, age, faim = 50) {
        this.nom = nom;
        this.age = age;
        this.faim = Math.max(0, Math.min(100, faim));
    }

    anniversaire() {
        this.age++;
        console.log(`Joyeux anniversaire ${this.nom} !`);
    }

    changerNom(nouveauNom) {
        this.nom = nouveauNom;
    }

    presenter() {
        console.log(`${this.nom} - ${this.age} ans - Faim : ${this.faim}`);
    }

    vivre() {
        this.faim = Math.min(100, this.faim + 10);
    }
}

class Herbivore extends Animal {
    manger() {
        this.faim = Math.max(0, this.faim - 20);
        if (this.faim === 0) {
            console.log("Vous êtes rassasié");
        }
    }
}

class Carnivore extends Animal {
    manger() {
        this.faim = Math.max(0, this.faim - 30);
        if (this.faim === 0) {
            console.log("Vous êtes rassasié");
        }
    }
}


const animal1 = new Animal("Scooby", 5);
const animal2 = new Animal("Rex", 8);
const animal3 = new Animal("Cobra", 3);

const animals = [animal1, animal2, animal3];

animals.forEach(animal => animal.anniversaire());

animals[1].changerNom("Max");

console.log("Liste des animaux :");
animals.forEach(animal => animal.presenter());


const herbivore = new Herbivore("Girafe", 5, 80);
const carnivore = new Carnivore("Lion", 8, 90);

const animaux = [herbivore, carnivore];

console.log("Présentation :");
animaux.forEach(animal => animal.presenter());

console.log("Repas :");
animaux.forEach(animal => {
    if (animal.faim > 70) {
        animal.manger();
    }
});

console.log("Après le repas :");
animaux.forEach(animal => animal.presenter());
