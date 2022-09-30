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

    def check_arrows(self):
        print(f"Remaining arrows: {self.num_of_arrows}")
    
    def run(self):
        print("ran really fast")

class HybridBorg(Wizard, Archer):
    def __init__(self, name, power, num_of_arrows):
        Archer.__init__(self, name, num_of_arrows)
        Wizard.__init__(self, name, power)

wizard_1 = Wizard("Merlin", 30)
archer_1 = Archer("Robin", 45)
hb_1 = HybridBorg("Alex", 50, 100)
# In multiple inheritance we need to understand the objects very well to create a hybrid object
# Here we are passing Wizard first so we had to pass its parameter "power" before "num_of_arrows"
# But the order of __init__ inside the hybrid class doesn't matter
# Again when we were passing arguments as we have first passed 50, so that 50 got assigned into "power" (Wizard)

hb_1.run() # ran really fast
hb_1.attack() # Attacking with power of 50
hb_1.check_arrows() # Remaining arrows: 100
hb_1.sign_in() # Logged in
