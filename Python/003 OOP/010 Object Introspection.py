# We can inspect an object by using the "dir()" function
# It will give us the list of all the methods the object has access to

class User:
    def __init__(self, email):
        self.email = email # Now we haven an attribute inside the __init__ constructor of parent class

    def sign_in(self):
        print("Logged in")
    
    # Now we have attack method inside the parent class
    def attack(self):
        print("Do nothing")

class Wizard(User): # Inheriting from User class
    def __init__(self, name, power, email): # we need to specify the attribute in this __init__
        super().__init__(email) # When we use super() we don't need to write "self"
        self.name = name
        self.power = power
    
    def attack(self):
        print(f"Attacking with power of {self.power}")

class Archer(User): # Inheriting from User class
    def __init__(self, name, num_of_arrows, email):
        User.__init__(self, email) # Another way of writing it
        self.name = name
        self.num_of_arrows = num_of_arrows
    
    def attack(self):
        User.attack(self) # By doing this we can run the attack() method of parent inside its child
        print(f"Attacking with arrows: Arrows left - {self.num_of_arrows}")

wizard_1 = Wizard("Merlin", 30, "merlin@gmail.com")
archer_1 = Archer("Robin", 45, "archer@outlook.com")

print(dir(wizard_1))

'''
 Output
 ['__class__', '__delattr__', '__dict__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__le__', '__lt__', '__module__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', 
 '__subclasshook__', '__weakref__', 'attack', 'email', 'name', 'power', 'sign_in']
'''
