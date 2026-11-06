
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
        console.log(
            `${this.nom} - ${this.age} ans - Faim : ${this.faim}/100`
        );
    }

    vivre() {
        this.faim = Math.min(100, this.faim + 10);
        console.log(`${this.nom} vit. Faim : ${this.faim}/100`);
    }
}


class Herbivore extends Animal {
    manger() {
        this.faim = Math.max(0, this.faim - 20);
        console.log(`${this.nom} mange des plantes.`);

        if (this.faim === 0) {
            console.log("Vous êtes rassasié");
        }
    }
}


class Carnivore extends Animal {
    manger() {
        this.faim = Math.max(0, this.faim - 30);
        console.log(`${this.nom} mange de la viande.`);

        if (this.faim === 0) {
            console.log("Vous êtes rassasié");
        }
    }
}



const animal1 = new Animal("Scooby", 5);
const animal2 = new Animal("Rex", 8);
const animal3 = new Animal("Cobra", 3);

const animals = [animal1, animal2, animal3];

console.log("=== ANNIVERSAIRES ===");

animals.forEach(animal => animal.anniversaire());

animals[1].changerNom("Max");

console.log("=== LISTE DES ANIMAUX ===");

animals.forEach(animal => animal.presenter());




const herbivore = new Herbivore("Girafe", 5, 80);
const carnivore = new Carnivore("Lion", 8, 90);

const animaux = [herbivore, carnivore];

console.log("=== PRESENTATION ===");

animaux.forEach(animal => animal.presenter());

console.log("=== FAIRE VIVRE LES ANIMAUX ===");

animaux.forEach(animal => animal.vivre());

console.log("=== REPAS SI FAIM > 70 ===");

animaux.forEach(animal => {
    if (animal.faim > 70) {
        animal.manger();
    }
});

console.log("=== ETAT FINAL ===");

animaux.forEach(animal => animal.presenter());




console.log("=== TEST FAIM MINIMUM ===");

const testHerbivore = new Herbivore("Lapin", 2, 10);
testHerbivore.manger();
testHerbivore.presenter();

console.log("=== TEST FAIM MAXIMUM ===");

const testCarnivore = new Carnivore("Tigre", 4, 95);
testCarnivore.vivre();
testCarnivore.presenter();
