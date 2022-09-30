# There is no dedicated "private" or "public" keyword in python
# To let other developers know that this particular attribute or method is private, we put underscore ("_") before the name of the variable
# underscore ("_") before anything means that it is private and it should not be modified outside the class
class PlayerCharacter:
    def __init__(self, name = "Robert", age = 18):
        self.name = name
        self.age = age
    
    def run(self):
        print("run")
        return "done"
    
    def shout(self):
        return (f"My name is {self.name}!")

player_1 = PlayerCharacter("Andrew", 27)
print(player_1.age) # 27

# We can modify this instantiated object.
player_1.name = "Jack"
player_1.age = 31
print(player_1.name) # Jack
# This is not good.

# So to let other developers know that something is private we need to put an underscore ("_") before our attributes
# This doesn't provide any functionality. It's just letting other know what do we mean by this code

class GameCharacter:
    def __init__(self, name, age):
        self._name = name
        self._age = age
    
    def run(self):
        print("run")
        return "done"
    
    def speak(self):
        return (f"My name is {self._name}, and I am {self._age} years old!")

player_2 = GameCharacter("Lamar", 23)
print(player_2._name) # Lamar
print(player_2._age) # 23
