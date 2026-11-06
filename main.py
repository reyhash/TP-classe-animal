
class Animal:
    def __init__(self, nom, age):
        self.nom = nom
        self.age = age

    
    def anniversaire(self):
        self.age += 1
        print(f"Joyeux anniversaire {self.nom} !")
        print(f"Il a maintenant {self.age} ans.")

    
    def changer_nom(self, nouveau_nom):
        self.nom = nouveau_nom



animal1 = Animal("Scooby", 5)
animal2 = Animal("Rex", 8)
animal3 = Animal("cobra", 3)


animals = [animal1, animal2, animal3]


print("Liste des animaux :")
for animal in animals:
    print(animal.nom, "-", animal.age, "ans")


print("\nAnniversaires :")
for animal in animals:
    animal.anniversaire()


animals[1].changer_nom("Max")


print("\nListe finale :")
for animal in animals:
    print(animal.nom, "-", animal.age, "ans")
