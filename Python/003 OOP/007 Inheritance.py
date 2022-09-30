class User:
    def sign_in(self):
        print("Logged in")

class Wizard(User): # Inheriting from User class
    def __init__(self, name, power):
        self.name = name
        self.power = power
    
    def attack(self):
        print(f"Attacking with power of {self.power}")

class Archer(User): # Inheriting from User class
    def __init__(self, name, num_of_arrows):
        self.name = name
        self.num_of_arrows = num_of_arrows
    
    def attack(self):
        print(f"Attacking with arrows: Arrows left - {self.num_of_arrows}")

wizard_1 = Wizard("Harry", 24)
archer_1 = Archer("Ron", 26)

print(wizard_1) # <__main__.Wizard object at 0x000002330C567D60>
wizard_1.sign_in() # Logged in
print(archer_1) # <__main__.Archer object at 0x000002330CA97BB0>
archer_1.sign_in() # Logged in

# Instantiating wizard and archer with their attributes
wizard_2 = Wizard("Merlin", 50)
archer_2 = Archer("Robin", 100)

# Calling attack method on each objects
wizard_2.attack() # Attacking with power of 50
archer_2.attack() # Attacking with arrows: Arrows left - 100

# Again both of these objects have the sign_in methods due to their inheritance
wizard_2.sign_in() # Logged in
archer_2.sign_in() # Logged in

# There is a function named "isinstance()" to chack if a object is an instance of a class
print(isinstance(wizard_1, Wizard)) # True
print(isinstance(wizard_1, User)) # True
print(isinstance(wizard_1, object)) # True
# Every object that we create is also an instance of a global class named "object"
