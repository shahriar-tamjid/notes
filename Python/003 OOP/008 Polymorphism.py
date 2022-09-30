# Polymorphism -> Poly means Many and Morphism means Forms -> Polymorphism means many forms
# Although different objects can have same method name but because the objects are different their methods will function differently.
# Example
# The attack method of wizard is different from the attack method of archer

class User:
    def sign_in(self):
        print("Logged in")
    
    # Now we have attack method inside the parent class
    def attack(self):
        print("Do nothing")

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
        User.attack(self) # By doing this we can run the attack() method of parent inside its child
        print(f"Attacking with arrows: Arrows left - {self.num_of_arrows}")

wizard_1 = Wizard("Merlin", 30)
archer_1 = Archer("Robin", 45)

def player_attack(character):
    character.attack()

player_attack(wizard_1) # Attacking with power of 30
player_attack(archer_1) # Attacking with arrows: Arrows left - 45

# Here though we are adding the same method after our passed object. As the same method has different meaning to each object it acts differently each time.

# Using for loop to perform the same action
for player in [wizard_1, archer_1]:
    player.attack()

# Output:
# Attacking with power of 30
# Attacking with arrows: Arrows left - 45

# If we call the attack of wizard we will see that the child's method will over-write the parent's method
wizard_1.attack() # Attacking with power of 30

# Now if we call the attack of archer we can see the attack method of both parent and child
archer_1.attack()
# Output:
# Do nothing
# Attacking with arrows: Arrows left - 45
